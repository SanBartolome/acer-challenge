import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-rules',
  templateUrl: './game-rules.component.html',
  styleUrls: ['./game-rules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameRulesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openGameRules(): void {
    this.router.navigate(['/reglamento/reglamento-1vs1']);
  }
}
