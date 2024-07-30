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
  login(@Body() dto: UserLoginDTO): Promise<any> {
    return this.authService.loginUser(dto);
  }

  @Post('refresh')
  @ApiResponse({ status: 200, type: AuthUserResponse })
  @ApiResponse({ status: 400, description: 'Invalid or expired refresh token' })
  async refresh(@Body('refreshToken') refreshToken: string) {
    try {
      const tokens = await this.tokenService.refreshAccessToken(refreshToken);
      return tokens;
    } catch (e) {
      console.error('Refresh token error:', e);
      throw new BadRequestException(appError.INVALID_REF_TOKEN);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('test')
  test() {
    return true;
  }
}
