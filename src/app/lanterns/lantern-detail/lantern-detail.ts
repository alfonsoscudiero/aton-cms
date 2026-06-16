import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Lantern } from '../lantern.model';
import { LanternService } from '../lantern.service';

@Component({
  selector: 'aton-lantern-detail',
  standalone: false,
  templateUrl: './lantern-detail.html',
  styleUrl: './lantern-detail.css',
})
export class LanternDetail {
  lantern: Lantern | null = null;

  constructor(
    private lanternService: LanternService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.lantern = this.lanternService.getLantern(id);
    });
  }

  onDeleteLantern(): void {
    if (!this.lantern) {
      return;
    }

    this.lanternService.deleteLantern(this.lantern);
    this.router.navigate(['/lanterns']);
  }
}