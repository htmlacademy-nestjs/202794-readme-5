import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ISendMailOptions } from '@nestjs-modules/mailer';
import { MailPropDesc } from '../mails.const';

export class SendMailDto implements ISendMailOptions {
  @ApiProperty({ description: MailPropDesc.Date })
  @IsOptional()
  public timestamp: Date = new Date();

  @ApiProperty({
    description: MailPropDesc.Email,
    example: 'alice@mail.com',
    required: true,
  })
  @IsString()
  public to: string;

  @ApiProperty({
    description: MailPropDesc.Email,
    example: 'alice@mail.com',
    required: true,
  })
  @IsString()
  public from: string;

  @ApiProperty({ description: MailPropDesc.Subject })
  @IsString()
  public subject: string;

  @ApiProperty({ description: MailPropDesc.Text })
  @IsString()
  public text: string;
}
