import { Module } from '@nestjs/common';
import { PgConnectionService } from '../lib/connection.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PgConnectionService],
})
export class UserModule {}