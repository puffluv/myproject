import { BadRequestException, Body, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from '@modules/auth/response';
import { appError } from '@src/common/constants';
import { UserService } from '@modules/user';
import { CreateUserDTO } from '@modules/user/dto';
import { UserLoginDTO } from '@modules/auth/dto';
import { TokenService } from '@modules/token';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUsers(dto: CreateUserDTO): Promise<AuthUserResponse> {
    try {
      const existUser = await this.userService.findUserByEmail(dto.email);
      const existUserByUsername = await this.userService.findUserByUsername(
        dto.username,
      );
      if (existUser) throw new BadRequestException(appError.USER_EXIST);
      if (existUserByUsername)
        throw new BadRequestException(appError.USERNAME_EXIST);

      await this.userService.createUser(dto);
      return this.userService.publicUser(dto.email);
    } catch (e) {
      throw e;
    }
  }

  async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
    try {
      const existUser = await this.userService.findUserByEmail(dto.email);
      if (!existUser) throw new BadRequestException(appError.WRONG_DATA);
      const validatePassword = await bcrypt.compare(
        dto.password,
        existUser.password,
      );
      if (!validatePassword) throw new BadRequestException(appError.WRONG_DATA);
      return this.userService.publicUser(dto.email);
    } catch (e) {
      throw e;
    }
  }

  async refresh(
    @Body('refreshToken') refreshToken: string,
  ): Promise<AuthUserResponse> {
    try {
      const payload = await this.tokenService.verifyRefreshToken(refreshToken);
      const user = await this.userService.publicUser(payload.email);
      const tokens = await this.tokenService.generateJwtToken(user.user);
      return {
        user: user.user,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      };
    } catch (e) {
      throw new BadRequestException(appError.INVALID_REF_TOKEN);
    }
  }
}
