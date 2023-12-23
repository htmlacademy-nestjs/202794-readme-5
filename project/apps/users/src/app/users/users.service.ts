import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { getPasswordHash } from '@project/libs/shared/helpers';
import { CreateUserDto } from './users.dto/create-user.dto';
import { UpdateUserDto } from './users.dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { UsersErrorMessage } from './users.const';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
  ) {}

  public async create(dto: CreateUserDto) {
    if (await this.findByEmail(dto.email)) {
      throw new ConflictException(UsersErrorMessage.UserEmailAlreadyExists);
    }
    const { password, ...user } = dto;
    const passwordHash = await getPasswordHash(password);

    return this.usersRepository.create({ ...user, passwordHash });
  }

  public async findAll() {
    return this.usersRepository.findAll();
  }

  public async findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  public async findOneOrThrow(id: string) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException(UsersErrorMessage.UserIdNotFound);
    return user;
  }

  public async findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }

  public async findByEmailOrThrow(email: string) {
    const user = await this.findByEmail(email);
    if (!user) throw new NotFoundException(UsersErrorMessage.UserEmailNotFound);
    return user;
  }

  public async update(id: string, dto: UpdateUserDto) {
    await this.findOneOrThrow(id);
    const { password, ...dtoProps } = dto;
    const data: Partial<User> = dtoProps;

    if (password) {
      data.passwordHash = await getPasswordHash(password);
    }
    return this.usersRepository.update(id, data);
  }

  public async removeAll() {
    return this.usersRepository.removeAll();
  }

  public async remove(id: string) {
    await this.findOneOrThrow(id);
    return this.usersRepository.remove(id);
  }
}
