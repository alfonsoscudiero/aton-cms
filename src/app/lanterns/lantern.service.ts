import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Lantern } from './lantern.model';
import { MOCKLANTERNS } from './MOCKLANTERNS';
@Injectable({
  providedIn: 'root'
})

export class LanternService {
  lanternChangedEvent = new Subject<Lantern[]>();

  private lanterns: Lantern[] = MOCKLANTERNS;

  getLanterns(): Lantern[] {
    return this.lanterns.slice();
  }

  getLantern(id: string): Lantern | null {
    return this.lanterns.find(lantern => lantern.id === id) || null;
  }

  deleteLantern(lantern: Lantern): void {
    const index = this.lanterns.indexOf(lantern);

    if (index !== -1) {
      this.lanterns.splice(index, 1);
      this.lanternChangedEvent.next(this.lanterns.slice());
    }
  }
}