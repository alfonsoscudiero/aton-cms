import { Component, OnInit } from '@angular/core';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'aton-project-list',
  standalone: false,
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})

export class ProjectList implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();

    this.projectService.projectChangedEvent.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }
}
