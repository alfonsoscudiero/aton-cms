import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from './project.model';
import { MOCKPROJECTS } from './MOCKPROJECTS';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectChangedEvent = new Subject<Project[]>();

  private projects: Project[] = MOCKPROJECTS;

  getProjects(): Project[] {
    return this.projects.slice();
  }

  getProject(id: string): Project | null {
    return (
      this.projects.find(project => project.id === id) || null
    );
  }

  deleteProject(project: Project): void {
    if (!project) {
      return;
    }

    const index = this.projects.indexOf(project);

    if (index < 0) {
      return;
    }

    this.projects.splice(index, 1);
    this.projectChangedEvent.next(this.projects.slice());
  }
}