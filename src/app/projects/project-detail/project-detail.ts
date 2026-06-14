import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { Lantern } from '../../lanterns/lantern.model';
import { LanternService } from '../../lanterns/lantern.service';
import { Buoy } from '../../buoys/buoy.model';
import { BuoyService } from '../../buoys/buoy.service';

@Component({
  selector: 'aton-project-detail',
  standalone: false,
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail implements OnInit {
  project: Project | null = null;
  id!: string;

  projectLanterns: Lantern[] = [];
  projectBuoys: Buoy[] = [];

  constructor(
    private projectService: ProjectService,
    private lanternService: LanternService,
    private buoyService: BuoyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.project = this.projectService.getProject(this.id);

      if (this.project) {
        this.projectLanterns = this.project.lanternIds
          .map(id => this.lanternService.getLantern(id))
          .filter((lantern): lantern is Lantern => lantern !== null);

        this.projectBuoys = this.project.buoyIds
          .map(id => this.buoyService.getBuoy(id))
          .filter((buoy): buoy is Buoy => buoy !== null);
      }
    });
  }

  onEditProject(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteProject(): void {
    if (!this.project) {
      return;
    }

    this.projectService.deleteProject(this.project);
    this.router.navigate(['/projects']);
  }
}