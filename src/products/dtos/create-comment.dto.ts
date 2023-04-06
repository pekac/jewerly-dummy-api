import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  message: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  user: string;
}
