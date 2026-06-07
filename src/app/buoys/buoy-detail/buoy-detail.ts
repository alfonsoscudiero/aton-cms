import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Buoy } from '../buoy.model';
import { BuoyService } from '../buoy.service';

@Component({
  selector: 'aton-buoy-detail',
  standalone: false,
  templateUrl: './buoy-detail.html',
  styleUrl: './buoy-detail.css',
})
export class BuoyDetail {
  buoy?: Buoy;

  constructor(
    private buoyService: BuoyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.buoy = this.buoyService.getBuoy(id);
    });
  }

  onDeleteBuoy(): void {
    if (!this.buoy) {
      return;
    }

    this.buoyService.deleteBuoy(this.buoy);
    this.router.navigate(['/buoys']);
  }
}
