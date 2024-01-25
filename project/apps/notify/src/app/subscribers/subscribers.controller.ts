import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { SubscribersService } from './subscribers.service';
import { SubscribersApiDesc } from './subscribers.const';

@Controller('subscribers')
export class SubscribersController {
  constructor(
    private readonly subscribersService: SubscribersService,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: SubscribersApiDesc.GetAll,
  })
  @Get()
  public async findAll() {
    return this.subscribersService.findAll();
  }
}
