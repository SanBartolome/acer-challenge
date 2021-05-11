import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
