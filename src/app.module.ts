import { CatsModule } from './cats/cats.module';
// import { CatsService } from './cats/cats.service';
// import { CatsController } from './cats/cats.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [CatsModule],
})
export class AppModule { }
