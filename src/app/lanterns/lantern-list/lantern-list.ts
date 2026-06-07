import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
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

  @Input() selectedLantern?: Lantern;

  @Output() lanternSelected = new EventEmitter<Lantern>();
  @Output() newLanternSelected = new EventEmitter<void>();

  constructor(private lanternService: LanternService) {}

  ngOnInit(): void {
    this.lanternService.lanternChangedEvent.subscribe(
      (lanterns: Lantern[]) => {
        this.lanterns = lanterns;
      }
    );

    this.lanterns = this.lanternService.getLanterns();
  }

  onSelectedLantern(lantern: Lantern): void {
    this.lanternSelected.emit(lantern);
  }

  onNewLantern(): void {
    this.newLanternSelected.emit();
  }
}