import { Component } from '@angular/core';
import { Lantern } from './lantern.model';

@Component({
  selector: 'aton-lanterns',
  standalone: false,
  templateUrl: './lanterns.html',
  styleUrl: './lanterns.css',
})
export class Lanterns {

  selectedLantern?: Lantern;

  onLanternSelected(lantern: Lantern): void {
    this.selectedLantern = lantern;
  }
}