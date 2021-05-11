import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
