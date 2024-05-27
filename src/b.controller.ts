import { Controller, Get } from '@nestjs/common';

@Controller('b')
export class BController {
  @Get()
  findAll(): string {
    return 'This action returns all users 123asdasasdasdasdasdasdasdasda4564 456 45646 4564 45646 12312313';
  }
}
