import { Component } from '@angular/core';
import { Lantern } from './lantern.model';
import { LanternService } from './lantern.service';

@Component({
  selector: 'aton-lanterns',
  standalone: false,
  templateUrl: './lanterns.html',
  styleUrl: './lanterns.css',
})
export class Lanterns {

  selectedLantern?: Lantern;
  showEdit = false;

  constructor(private lanternService: LanternService) {}

  onLanternSelected(lantern: Lantern): void {
    this.selectedLantern = lantern;
    this.showEdit = false;
  }

  onNewLantern(): void {
    this.selectedLantern = undefined;
    this.showEdit = true;
  }

  onEditLantern(): void {
    this.showEdit = true;
  }

  onDeleteLantern(lantern: Lantern): void {
    this.lanternService.deleteLantern(lantern);
    this.selectedLantern = undefined;
    this.showEdit = false;
  }
}