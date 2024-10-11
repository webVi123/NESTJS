import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  registerUser(@Body('name') name: string) {
    return this.userService.registerUser(name);
  }

  @Get('get-users')
  getUsers() {
    return this.userService.getUsers();
  }
}