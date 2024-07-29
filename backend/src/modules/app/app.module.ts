import { Module } from '@nestjs/common';
import { AppController } from '@modules/app';
import { AppService } from '@modules/app';
import { UserModule } from '@src/modules/user';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from '@src/configurations';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models/user.model';
import { AuthModule } from '@modules/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [User],
      }),
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
