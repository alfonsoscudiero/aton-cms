import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lantern } from '../lantern.model';

@Component({
  selector: 'aton-lantern-detail',
  standalone: false,
  templateUrl: './lantern-detail.html',
  styleUrl: './lantern-detail.css',
})
export class LanternDetail {

  @Input() lantern?: Lantern;

  @Output() editLanternSelected = new EventEmitter<void>();

  onEditLantern(): void {
    this.editLanternSelected.emit();
  }

}