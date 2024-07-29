import { Module } from '@nestjs/common';
import { UserController } from '@modules/user/';
import { UserService } from '@modules/user';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
