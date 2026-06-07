import { EventEmitter, Injectable } from '@angular/core';
import { Lantern } from './lantern.model';
import { MOCKLANTERNS } from './MOCKLANTERNS';

@Injectable({
  providedIn: 'root'
})
export class LanternService {
  lanternChangedEvent = new EventEmitter<Lantern[]>();

  private lanterns: Lantern[] = MOCKLANTERNS;

  getLanterns(): Lantern[] {
    return this.lanterns.slice();
  }

  deleteLantern(lantern: Lantern): void {
    if (!lantern) {
      return;
    }

    const index = this.lanterns.indexOf(lantern);

    if (index < 0) {
      return;
    }

    this.lanterns.splice(index, 1);
    this.lanternChangedEvent.emit(this.lanterns.slice());
  }
}