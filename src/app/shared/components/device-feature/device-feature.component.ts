import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-device-feature',
  templateUrl: './device-feature.component.html',
  styleUrls: ['./device-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceFeatureComponent implements OnInit {
  @Input() imageSrc = '';
  @Input() firstText = '';
  @Input() secondText = '';

  constructor() {}

  ngOnInit(): void {}
}
