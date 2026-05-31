import { Injectable } from '@angular/core';
import { Lantern } from './lantern.model';

@Injectable({
  providedIn: 'root'
})
export class LanternService {
  private lanterns: Lantern[] = [
    new Lantern(
      '1',
      'PMAPI-SC35',
      'Self-Contained LED',
      'assets/images/lanterns/sc35.webp',
      'assets/datasheets/PMAPI-SC35_Self_Contained_LED_Marine_Lantern.pdf'
    ),
    new Lantern(
      '2',
      'M850',
      'LED Marine Lantern',
      'assets/images/lanterns/m850.webp',
      'https://example.com/m850.pdf'
    )
  ];

  getLanterns(): Lantern[] {
    return this.lanterns.slice();
  }
}