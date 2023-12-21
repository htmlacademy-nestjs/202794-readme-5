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

  private throwIfUserIdNotFoud(user: User | null) {
    if (!user) throw new NotFoundException(UsersErrorMessage.UserIdNotFound);
  }

  public async create(dto: CreateUserDto) {
    if (await this.usersRepository.findByEmail(dto.email)) {
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
    const user = await this.usersRepository.findOne(id);
    this.throwIfUserIdNotFoud(user);
    return user;
  }

  public async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    this.throwIfUserIdNotFoud(user);
    return user;
  }

  public async update(id: string, dto: UpdateUserDto) {
    this.throwIfUserIdNotFoud(await this.usersRepository.findOne(id));
    const { password, ...dtoProps } = dto;
    const user: Partial<User> = dtoProps;

    if (password) {
      user.passwordHash = await getPasswordHash(password);
    }
    return this.usersRepository.update(id, user);
  }

  public async remove(id: string) {
    this.throwIfUserIdNotFoud(await this.usersRepository.findOne(id));
    return this.usersRepository.remove(id);
  }
}
