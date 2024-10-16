import { Controller, Get } from '@nestjs/common';
import { UsersService } from './fetch-users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
