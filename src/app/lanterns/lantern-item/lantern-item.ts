import { Component, Input } from '@angular/core';

import { Lantern } from '../lantern.model';

@Component({
  selector: 'aton-lantern-item',
  standalone: false,
  templateUrl: './lantern-item.html',
  styleUrl: './lantern-item.css',
})
export class LanternItem {
  @Input() lantern!: Lantern;
}
