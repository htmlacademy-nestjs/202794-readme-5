import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { getPasswordHash } from '@project/libs/shared/helpers';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository
  ) {}

  public async create(dto: CreateUserDto) {
    if (await this.usersRepository.findByEmail(dto.email)) {
      throw new ConflictException('User with email address already exists');
    }
    const { password, ...user } = dto;
    const passwordHash = await getPasswordHash(password);

    return this.usersRepository.create({ ...user, passwordHash });
  }

  public async findAll() {
    return this.usersRepository.findAll();
  }

  public async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User with id not found');
    }
    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User with email not found');
    }
    return user;
  }

  public async update(id: string, dto: UpdateUserDto) {
    const { password, ...dtoProps } = dto;
    const user: Partial<User> = dtoProps;

    if (!await this.usersRepository.contains(id)) {
      throw new NotFoundException('User with id not found');
    }
    if (password) {
      user.passwordHash = await getPasswordHash(password);
    }
    return this.usersRepository.update(id, user);
  }

  public async remove(id: string) {
    if (!await this.usersRepository.contains(id)) {
      throw new NotFoundException('User with id not found');
    }
    return this.usersRepository.remove(id);
  }
}
