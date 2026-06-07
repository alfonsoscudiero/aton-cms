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
  @Output() deleteLanternSelected = new EventEmitter<Lantern>();

  onEditLantern(): void {
    this.editLanternSelected.emit();
  }

  onDeleteLantern(): void {
    if (!this.lantern) {
      return;
    }

    this.deleteLanternSelected.emit(this.lantern);
  }

}