import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@modules/auth';
import { CreateUserDTO } from '@modules/user/dto';
import { UserLoginDTO } from '@modules/auth/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUsers(dto);
  }

  @Post('login')
  login(@Body() dto: UserLoginDTO) {
    return this.authService.loginUser(dto);
  }
}
