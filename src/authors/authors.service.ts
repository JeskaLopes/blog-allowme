import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorsRepository, IAuthorsRepository } from './authors.repository';
import { Posts } from 'src/posts/entities/post.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(AuthorsRepository) private authorsRepository: IAuthorsRepository,
  ) { }

  async create(createAuthorDto: CreateAuthorDto) {
    const newAuthor = await this.authorsRepository.create(createAuthorDto);
    return newAuthor;
  }

  async findAll() {
    const data =  await this.authorsRepository.findAll({});
    return {data}
  }

  async findOne(id: number) {
    const data =  await this.authorsRepository.findOne({where: {id}, include: [Posts]});
    return {data}
  }
}
