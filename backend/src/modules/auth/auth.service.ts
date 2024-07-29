import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '@modules/user';
import { CreateUserDTO } from '@modules/user/dto';
import { appError } from '@src/common/constants';
import { UserLoginDTO } from '@modules/auth/dto';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from '@modules/auth/response';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUsers(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException(appError.USER_EXIST);
    return this.userService.createUser(dto);
  }

  async loginUser(dto: UserLoginDTO): Promise<AuthUserResponse> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (!existUser) throw new BadRequestException(appError.USER_NOT_EXIST);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(appError.WRONG_DATA);
    return existUser;
  }
}
