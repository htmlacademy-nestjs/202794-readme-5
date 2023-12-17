import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserModel, UserSchema } from './user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserModel.name, schema: UserSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService],
  exports: [UsersRepository, UsersService],
})
export class UsersModule {}
