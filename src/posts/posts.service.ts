import { Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IPostsRepository, PostsRepository } from './posts.repository';
import { FindPostQueryDto } from './dto/find-post.dto';
import { Authors } from 'src/authors/entities/author.entity';
import { formatAuthorData } from 'src/helpers/normalize-response-author-data';

export class PostsService {
  constructor(
    @Inject(PostsRepository) private postsRepository: IPostsRepository,
  ) { }

  async create(createPostDto: CreatePostDto) {
    const newPost = await this.postsRepository.create({ ...createPostDto, authorId: createPostDto.authorId });
    return newPost;
  }

  async findAll(queryDto: FindPostQueryDto) {
    const offset = +queryDto.page ?? 0
    const limit = +queryDto.limit ?? 4
    const order = queryDto.order ?? 'ASC'

    const data: any = await this.postsRepository.findAndCountAll({ limit, offset, order: [['createdAt', order]], raw: true, include: [{model: Authors }] })
    const formattedData = formatAuthorData(data.rows)
    return {
      data: formattedData,
      totalCount: data.count,
      totalPages: Math.ceil(data.count / limit),
      page: offset,
      limit
    }
  }

  async findOne(id: number) {
    const data = await this.postsRepository.findOne({ where: { id }, include: [Authors] });
    return {
      data
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {

    const [numberOfAffectedRows, [updatedData]] = await this.postsRepository.update({ ...updatePostDto }, { where: { id }, returning: true });
    return { numberOfAffectedRows, updatedData };
  }

  async remove(id: number) {
    return await this.postsRepository.delete({ where: { id } });
  }
}
