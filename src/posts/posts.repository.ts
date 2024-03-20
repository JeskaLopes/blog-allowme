import { singleton } from 'tsyringe';
import { Posts } from './entities/post.entity';
import { BaseRepository, IBaseRepository } from 'src/core/repos/base.repos';

export interface IPostsRepository extends IBaseRepository<Posts> { }

@singleton<PostsRepository>()
export class PostsRepository
  extends BaseRepository<Posts>
  implements IPostsRepository {
  constructor() {
    super(Posts);
  }
}
