import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '@modules/user/dto';
import { UserLoginDTO } from '@modules/auth/dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthUserResponse } from '@modules/auth/response';
import { JwtAuthGuard } from '@src/guards';
import { TokenService } from '@modules/token';
import { appError } from '@src/common/constants';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateUserDTO })
  @Post('register')
  register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
    return this.authService.registerUsers(dto);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200, type: AuthUserResponse })
  @Post('login')
  login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
    return this.authService.loginUser(dto);
  }

  @ApiTags('API')
  @Post('refresh')
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired refresh token' })
  async refresh(
    @Body('refreshToken') refreshToken: string,
  ): Promise<AuthUserResponse> {
    return this.authService.refresh(refreshToken);
  }
}
