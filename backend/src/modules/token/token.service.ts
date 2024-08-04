import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user';
import { appError } from '@src/common/constants';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  async generateJwtToken(user) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('secret_jwt'),
      expiresIn: this.configService.get<string>('expire_jwt'),
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('refresh_secret'),
      expiresIn: this.configService.get<string>('expire_refresh_jwt'),
    });
    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get<string>('refresh_secret'),
      });
      return payload;
    } catch (e) {
      throw new UnauthorizedException(appError.INVALID_REF_TOKEN);
    }
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const payload = await this.verifyRefreshToken(refreshToken);

      const user = await this.userService.findUserByEmail(payload.email);
      if (!user) {
        throw new UnauthorizedException();
      }

      const newAccessToken = this.jwtService.sign(
        { email: user.email, sub: user.id },
        {
          secret: this.configService.get<string>('secret_jwt'),
          expiresIn: this.configService.get<string>('expire_refresh_jwt'),
        },
      );

      return { accessToken: newAccessToken, refreshToken };
    } catch (e) {
      throw new UnauthorizedException(appError.INVALID_REF_TOKEN);
    }
  }
}
