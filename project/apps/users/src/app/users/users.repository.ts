import { Injectable } from '@nestjs/common';
import { MemoryRepository } from '@project/libs/shared/core'
import { User } from './user.entity';

@Injectable()
export class UsersRepository extends MemoryRepository<User> {
  public async findByEmail(email: string) {
    const users = await this.findAll();
    const user = users.find(it => it.email === email);
    return user;
  }
}
