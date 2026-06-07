import { Component, OnInit } from '@angular/core';

import { Buoy } from '../buoy.model';
import { BuoyService } from '../buoy.service';

@Component({
  selector: 'aton-buoy-list',
  standalone: false,
  templateUrl: './buoy-list.html',
  styleUrl: './buoy-list.css',
})
export class BuoyList implements OnInit {
  buoys: Buoy[] = [];

  constructor(private buoyService: BuoyService) {}

  ngOnInit(): void {
    this.buoyService.buoysChangedEvent.subscribe((buoys: Buoy[]) => {
      this.buoys = buoys;
    });

    this.buoys = this.buoyService.getBuoys();
  }
}