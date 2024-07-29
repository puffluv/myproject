import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenModule } from '@modules/token';
import { JwtStrategy } from '@src/strategy';


@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
