import { Injectable } from '@angular/core';
import { Lantern } from './lantern.model';
import { MOCKLANTERNS } from './MOCKLANTERNS';

@Injectable({
  providedIn: 'root'
})
export class LanternService {
  private lanterns: Lantern[] = MOCKLANTERNS;

  getLanterns(): Lantern[] {
    return this.lanterns.slice();
  }
}