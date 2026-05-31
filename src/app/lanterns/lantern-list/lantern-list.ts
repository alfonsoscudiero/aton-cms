import { Component, OnInit } from '@angular/core';
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

  constructor(private lanternService: LanternService) {}

  ngOnInit(): void {
    this.lanterns = this.lanternService.getLanterns();
  }
}