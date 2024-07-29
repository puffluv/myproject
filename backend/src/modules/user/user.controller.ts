import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@modules/user';
import { CreateUserDTO } from '@modules/user/dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUsers(@Body() dto: CreateUserDTO) {
    return this.userService.createUser(dto);
  }
}
