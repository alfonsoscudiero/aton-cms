import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Lantern } from '../lantern.model';
import { LanternService } from '../lantern.service';

@Component({
  selector: 'aton-lantern-edit',
  standalone: false,
  templateUrl: './lantern-edit.html',
  styleUrl: './lantern-edit.css',
})
export class LanternEdit implements OnInit {
  originalLantern: Lantern | null = null;
  lantern: Lantern | null = null;
  editMode: boolean = false;
  id: string = '';

  constructor(
    private lanternService: LanternService,
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

      this.originalLantern = this.lanternService.getLantern(this.id);

      if (!this.originalLantern) {
        return;
      }

      this.editMode = true;
      this.lantern = JSON.parse(JSON.stringify(this.originalLantern));
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const newLantern = new Lantern(
      '',
      value.model,
      value.type,
      '',
      value.datasheetUrl || ''
    );

    if (this.editMode && this.originalLantern) {
      this.lanternService.updateLantern(this.originalLantern, newLantern);
    } else {
      this.lanternService.addLantern(newLantern);
    }

    this.router.navigate(['/lanterns']);
  }

  onCancel(): void {
    this.router.navigate(['/lanterns']);
  }
}