import { Component, Input } from '@angular/core';
import { Buoy } from '../buoy.model';

@Component({
  selector: 'aton-buoy-item',
  standalone: false,
  templateUrl: './buoy-item.html',
  styleUrl: './buoy-item.css'
})
export class BuoyItem {

  @Input() buoy!: Buoy;

}