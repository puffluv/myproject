import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDTO } from '@modules/user/dto';
import { JwtAuthGuard } from '@src/guards';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { appError } from '@src/common/constants';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('API')
  @ApiResponse({ status: 200, type: UpdateUserDTO })
  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(
    @Body() updateDTO: UpdateUserDTO,
    @Req() request,
  ): Promise<UpdateUserDTO> {
    const user = request.user;
    return this.userService.updateUser(user.email, updateDTO);
  }

  @ApiTags('API')
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteUser(@Req() request): Promise<boolean> {
    const user = request.user;
    if (!user || !user.email) {
      throw new BadRequestException(appError.USER_NOT_FOUND);
    }
    return this.userService.deleteUser(user.email);
  }
}
