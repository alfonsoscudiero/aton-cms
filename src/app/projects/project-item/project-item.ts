import { Component, Input } from '@angular/core';

import { Project } from '../project.model';

@Component({
  selector: 'aton-project-item',
  standalone: false,
  templateUrl: './project-item.html',
  styleUrl: './project-item.css'
})
export class ProjectItem {
  @Input() project!: Project;
}
