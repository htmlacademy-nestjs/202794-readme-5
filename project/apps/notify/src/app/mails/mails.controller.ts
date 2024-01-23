import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MailsService } from '../mails/mails.service';
import { SendMailDto } from './mails.dto/send-mail.dto';
import { MailApiDesc } from './mails.const';

@ApiTags('Mails')
@Controller('mails')
export class MailsController {
  constructor(
    private readonly mailService: MailsService,
  ) {}

  @ApiResponse({
    type: SendMailDto,
    status: HttpStatus.OK,
    description: MailApiDesc.SendEmail,
  })
  @Post('send')
  public async send(@Body() dto: SendMailDto) {
    return this.mailService.send(dto);
  }
}
