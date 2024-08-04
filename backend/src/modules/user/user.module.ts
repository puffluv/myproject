import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models/user.model';
import { TokenModule } from '@modules/token';
import { Watchlist } from '@modules/watchlist/models';

@Module({
  imports: [SequelizeModule.forFeature([User, Watchlist]), forwardRef(() => TokenModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
