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

  addLantern(lantern: Lantern): void {
    if (!lantern) {
      return;
    }

    const maxId = this.lanterns.reduce((max, currentLantern) => {
      const currentId = Number(currentLantern.id);
      return currentId > max ? currentId : max;
    }, 0);

    lantern.id = String(maxId + 1);

    this.lanterns.push(lantern);
    this.lanternChangedEvent.next(this.lanterns.slice());
  }

  updateLantern(originalLantern: Lantern, newLantern: Lantern): void {
    if (!originalLantern || !newLantern) {
      return;
    }

    const index = this.lanterns.indexOf(originalLantern);

    if (index !== -1) {
      newLantern.id = originalLantern.id;
      this.lanterns[index] = newLantern;
      this.lanternChangedEvent.next(this.lanterns.slice());
    }
  }
}