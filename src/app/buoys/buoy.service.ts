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

  addBuoy(buoy: Buoy): void {
    if (!buoy) {
      return;
    }

    const maxId = this.buoys.reduce((max, currentBuoy) => {
      const currentId = Number(currentBuoy.id);
      return currentId > max ? currentId : max;
    }, 0);

    buoy.id = String(maxId + 1);

    this.buoys.push(buoy);
    this.buoysChangedEvent.next(this.buoys.slice());
  }

  updateBuoy(originalBuoy: Buoy, newBuoy: Buoy): void {
    if (!originalBuoy || !newBuoy) {
      return;
    }

    const index = this.buoys.indexOf(originalBuoy);

    if (index !== -1) {
      newBuoy.id = originalBuoy.id;
      this.buoys[index] = newBuoy;
      this.buoysChangedEvent.next(this.buoys.slice());
    }
  }
}