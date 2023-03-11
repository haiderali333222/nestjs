import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/contract-address')
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }
  @Get('/total-supply')
  getTotalSupply(): number {
    return this.appService.getTotalSupply();
  }

}
