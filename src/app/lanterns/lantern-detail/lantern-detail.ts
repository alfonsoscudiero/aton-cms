import { Component, Input } from '@angular/core';
import { Lantern } from '../lantern.model';

@Component({
  selector: 'aton-lantern-detail',
  standalone: false,
  templateUrl: './lantern-detail.html',
  styleUrl: './lantern-detail.css',
})
export class LanternDetail {

  @Input() lantern?: Lantern;

}