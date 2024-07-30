import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateJwtToken(user) {
    const payload = { user };
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('secret_jwt'),
      expiresIn: this.configService.get<number>('expire_jwt'), // Убедитесь, что это число
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('refresh_secret'),
      expiresIn: this.configService.get<number>('expire_refresh_jwt'), // Убедитесь, что это число
    });
    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string) {
    try {
      const payload = this.jwtService.verify(token, {
        secret: this.configService.get('refresh_secret'),
      });
      return payload;
    } catch (e) {
      throw new Error('Invalid refresh token');
    }
  }

  async refreshAccessToken(refreshToken: string) {
    const payload = await this.verifyRefreshToken(refreshToken);
    return this.generateJwtToken(payload.user);
  }
}
