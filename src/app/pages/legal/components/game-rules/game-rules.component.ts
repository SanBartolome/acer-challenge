import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
