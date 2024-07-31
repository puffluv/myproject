import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Watchlist } from '@modules/watchlist/models';
import { CreateAssetResponse } from '@modules/watchlist/response';
import { appError } from '@src/common/constants';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel(Watchlist)
    private readonly watchlistRepository: typeof Watchlist,
  ) {}

  async createAsset(user, dto): Promise<CreateAssetResponse> {
    if (!user || !user.id) {
      throw new BadRequestException(appError.USER_NOT_FOUND);
    }
    const watchlist = {
      user: user.id,
      name: dto.name,
      assetId: dto.assetId,
    };
    await this.watchlistRepository.create(watchlist);
    return watchlist;
  }

  async deleteAsset(userId: string, assetId: string): Promise<boolean> {
    const asset = await this.watchlistRepository.findOne({
      where: { user: userId, id: assetId },
    });
    if (!asset) {
      throw new NotFoundException(appError.ASSET_NOT_FOUND);
    }
    await asset.destroy();
    return true;
  }
}
