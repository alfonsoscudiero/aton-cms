import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Buoy } from '../buoy.model';
import { BuoyService } from '../buoy.service';

@Component({
  selector: 'aton-buoy-edit',
  standalone: false,
  templateUrl: './buoy-edit.html',
  styleUrl: './buoy-edit.css',
})
export class BuoyEdit implements OnInit {
  originalBuoy: Buoy | undefined;
  buoy: Buoy | undefined;
  editMode: boolean = false;
  id: string = '';

  constructor(
    private buoyService: BuoyService,
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

      this.originalBuoy = this.buoyService.getBuoy(this.id);

      if (!this.originalBuoy) {
        return;
      }

      this.editMode = true;
      this.buoy = JSON.parse(JSON.stringify(this.originalBuoy));
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const newBuoy = new Buoy(
      '',
      value.model,
      value.type,
      '',
      value.datasheetUrl || '',
      value.diameter || '',
      value.grossBuoyancy || '',
      value.overallHeight || '',
      value.focalPlaneHeight || ''
    );

    if (this.editMode && this.originalBuoy) {
      this.buoyService.updateBuoy(this.originalBuoy, newBuoy);
    } else {
      this.buoyService.addBuoy(newBuoy);
    }

    this.router.navigate(['/buoys']);
  }

  onCancel(): void {
    this.router.navigate(['/buoys']);
  }
}