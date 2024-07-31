import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from '@modules/watchlist/dto';
import { JwtAuthGuard } from '@src/guards';
import { CreateAssetResponse } from '@modules/watchlist/response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { appError } from '@src/common/constants';

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateAssetResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset(
    @Body() assetDTO: WatchlistDTO,
    @Req() request,
  ): Promise<CreateAssetResponse> {
    const user = (request as any).user;
    if (!user) {
      throw new BadRequestException(appError.USER_NOT_FOUND);
    }
    return this.watchlistService.createAsset(user, assetDTO);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  deleteAsset(@Query('id') id: string, @Req() request): Promise<boolean> {
    const user = (request as any).user;
    if (!user) {
      throw new BadRequestException(appError.USER_NOT_FOUND);
    }
    return this.watchlistService.deleteAsset(user.id, id);
  }
}
