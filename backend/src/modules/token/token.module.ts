import { forwardRef, Module } from '@nestjs/common';
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
    forwardRef(() => UserModule),
  ],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
