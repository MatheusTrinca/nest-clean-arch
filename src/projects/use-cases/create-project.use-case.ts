import { Repository } from 'typeorm';
import { Project } from '../entities/project.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from '../dto/create-project.dto';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  execute(createProjectDto: CreateProjectDto) {
    const project = new Project(createProjectDto);
    return this.projectRepo.save(project);
  }
}

// 1:29:35
