import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from './common/responses/api-response';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return ApiResponse.success('Backend funcionando');
  }
}