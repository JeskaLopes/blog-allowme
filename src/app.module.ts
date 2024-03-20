import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './core/database/database.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [PostsModule, DatabaseModule, AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
