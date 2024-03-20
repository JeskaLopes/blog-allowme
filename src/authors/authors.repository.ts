import { singleton } from 'tsyringe';
import { Authors } from './entities/author.entity';
import { BaseRepository, IBaseRepository } from 'src/core/repos/base.repos';

export interface IAuthorsRepository extends IBaseRepository<Authors> { }

@singleton<AuthorsRepository>()
export class AuthorsRepository
  extends BaseRepository<Authors>
  implements IAuthorsRepository {
  constructor() {
    super(Authors);
  }
}
