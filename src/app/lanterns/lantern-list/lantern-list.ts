import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Lantern } from '../lantern.model';
import { LanternService } from '../lantern.service';

@Component({
  selector: 'aton-lantern-list',
  standalone: false,
  templateUrl: './lantern-list.html',
  styleUrl: './lantern-list.css',
})
export class LanternList implements OnInit {
  lanterns: Lantern[] = [];
  @Output() lanternSelected = new EventEmitter<Lantern>();

  constructor(private lanternService: LanternService) {}

  ngOnInit(): void {
    this.lanterns = this.lanternService.getLanterns();
  }

  onSelectedLantern(lantern: Lantern): void {
    this.lanternSelected.emit(lantern);
  }
}