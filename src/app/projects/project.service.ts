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

  addProject(project: Project): void {
    if (!project) {
      return;
    }

    const maxId = this.projects.reduce((max, currentProject) => {
      const currentId = Number(currentProject.id);
      return currentId > max ? currentId : max;
    }, 0);

    project.id = String(maxId + 1);

    this.projects.push(project);
    this.projectChangedEvent.next(this.projects.slice());
  }

  updateProject(originalProject: Project, newProject: Project): void {
    if (!originalProject || !newProject) {
      return;
    }

    const index = this.projects.indexOf(originalProject);

    if (index !== -1) {
      newProject.id = originalProject.id;
      this.projects[index] = newProject;
      this.projectChangedEvent.next(this.projects.slice());
    }
  }
}