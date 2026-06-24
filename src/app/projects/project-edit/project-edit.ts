import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'aton-project-edit',
  standalone: false,
  templateUrl: './project-edit.html',
  styleUrl: './project-edit.css',
})
export class ProjectEdit implements OnInit {
  originalProject: Project | null = null;
  project: Project | null = null;
  editMode: boolean = false;
  id: string = '';

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      if (!this.id) {
        this.editMode = false;
        return;
      }

      this.originalProject = this.projectService.getProject(this.id);

      if (!this.originalProject) {
        return;
      }

      this.editMode = true;
      this.project = JSON.parse(JSON.stringify(this.originalProject));
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const lanternIds = value.lanternIds
      ? value.lanternIds.split(',').map((id: string) => id.trim())
      : [];

    const buoyIds = value.buoyIds
      ? value.buoyIds.split(',').map((id: string) => id.trim())
      : [];

    const newProject = new Project(
      '',
      value.quoteNumber || '',
      value.name,
      value.location,
      value.country,
      value.completionDate,
      value.description,
      lanternIds,
      buoyIds
    );

    if (this.editMode && this.originalProject) {
      this.projectService.updateProject(this.originalProject, newProject);
    } else {
      this.projectService.addProject(newProject);
    }

    this.router.navigate(['/projects']);
  }

  onCancel(): void {
    this.router.navigate(['/projects']);
  }
}