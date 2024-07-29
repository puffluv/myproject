import { Module } from '@nestjs/common';
import { AuthController } from '@modules/auth';
import { AuthService } from '@modules/auth';
import { UserModule } from '@modules/user';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
