import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectsUseCase } from './use-cases/findall-projects.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [CreateProjectUseCase, FindAllProjectsUseCase, ProjectsService],
})
export class ProjectsModule {}
