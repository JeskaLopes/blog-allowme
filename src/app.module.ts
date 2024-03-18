import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [PostsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
