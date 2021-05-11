import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-silver-gradient-button',
  templateUrl: './silver-gradient-button.component.html',
  styleUrls: ['./silver-gradient-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SilverGradientButtonComponent implements OnInit {
  @Input() text = '';
  @Input() routerLink = '';

  constructor() {}

  ngOnInit(): void {}
}
