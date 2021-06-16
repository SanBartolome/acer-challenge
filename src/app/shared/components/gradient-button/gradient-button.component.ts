import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-gradient-button',
  templateUrl: './gradient-button.component.html',
  styleUrls: ['./gradient-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradientButtonComponent implements OnInit {
  @Input() text = '';
  @Input() routerLink;
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
