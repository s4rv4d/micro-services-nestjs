/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class CreateRiderCoordDto {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;

  @IsString()
  @IsNotEmpty()
  rider: string;
}
