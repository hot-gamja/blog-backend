import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.userService.getUser(Number(id));
  }
}