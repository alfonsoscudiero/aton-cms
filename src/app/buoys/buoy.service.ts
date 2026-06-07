import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Buoy } from './buoy.model';
import { MOCKBUOYS } from './MOCKBUOYS';

@Injectable({
  providedIn: 'root'
})
export class BuoyService {
  buoysChangedEvent = new Subject<Buoy[]>();

  private buoys: Buoy[] = MOCKBUOYS.slice();

  getBuoys(): Buoy[] {
    return this.buoys.slice();
  }

  getBuoy(id: string): Buoy | undefined {
    return this.buoys.find((buoy) => buoy.id === id);
  }

  deleteBuoy(buoy: Buoy): void {
    const index = this.buoys.indexOf(buoy);

    if (index !== -1) {
      this.buoys.splice(index, 1);
      this.buoysChangedEvent.next(this.buoys.slice());
    }
  }
}