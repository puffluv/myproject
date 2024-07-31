import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';
import { UserModule } from '../user';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делает конфигурацию глобальной для всего приложения
    }),
    JwtModule.register({}),
    UserModule,
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
