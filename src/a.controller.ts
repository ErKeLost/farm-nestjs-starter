import { Controller, Get } from '@nestjs/common';

@Controller('a')
export class AController {
  @Get()
  findAll(): string {
    return 'This action returns all users 789 789 789 4564 4564566 45646465 46546544565';
  }
}
