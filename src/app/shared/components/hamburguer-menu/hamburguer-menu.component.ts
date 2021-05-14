import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-hamburguer-menu',
  templateUrl: './hamburguer-menu.component.html',
  styleUrls: ['./hamburguer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})
export class HamburguerMenuComponent implements OnInit {
  isHamburguer = true;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.isHamburguer = !this.isHamburguer;
  }
}
