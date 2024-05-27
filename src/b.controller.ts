import { Controller, Get } from '@nestjs/common';

@Controller('b')
export class BController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
