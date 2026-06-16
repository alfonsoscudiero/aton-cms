import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Lantern } from '../lantern.model';
import { LanternService } from '../lantern.service';

@Component({
  selector: 'aton-lantern-list',
  standalone: false,
  templateUrl: './lantern-list.html',
  styleUrl: './lantern-list.css',
})
export class LanternList implements OnInit {
  lanterns: Lantern[] = [];

  constructor(
    private lanternService: LanternService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lanternService.lanternChangedEvent.subscribe(
      (lanterns: Lantern[]) => {
        this.lanterns = lanterns;
      }
    );

    this.lanterns = this.lanternService.getLanterns();
  }

  onNewLantern(): void {
    this.router.navigate(['/lanterns/new']);
  }
}