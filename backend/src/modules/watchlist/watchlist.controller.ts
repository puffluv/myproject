import { Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistDTO } from '@modules/watchlist/dto';
import { JwtAuthGuard } from '@src/guards';

@Controller('watchlist')
export class WatchlistController {
    constructor(private readonly watchlistService: WatchlistService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDTO: WatchlistDTO, @Req() request) {
        const user = request.user;
        return this.watchlistService.createAsset(user, assetDTO)
    }

    @Get('get-all')
    getAllAssets() {
        return
    }

    @Patch('update')
    updateAsset() {
        return
    }
    
    @Delete()
    deleteAsset(@Query('id') id: string) {
        return
    }
}
