import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllProjectsUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  execute() {
    return this.projectRepo.find();
  }
}
