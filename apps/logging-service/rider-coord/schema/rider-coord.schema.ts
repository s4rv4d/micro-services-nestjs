import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Ridercoord {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  rider: string;
}

export type RiderCoordDocument = HydratedDocument<Ridercoord>;
export const RiderCoordSchema = SchemaFactory.createForClass(Ridercoord);
