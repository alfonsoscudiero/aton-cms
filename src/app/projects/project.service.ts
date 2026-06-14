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
}