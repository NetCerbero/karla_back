import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("usuario")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    return await this.appService.getHello();
  }

  @Post()
  async create(
    @Body() data
  ){
    return await this.appService.create(data);
  }
}
