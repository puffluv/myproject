import { IsString } from 'class-validator';

export class WatchlsitDTO {
  @IsString()
  name: string;

  @IsString()
  assetId: string;
}
