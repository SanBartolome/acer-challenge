import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  ddStatus = 'ddClosed';
  ddStyling = false;

  constructor() {}

  ngOnInit(): void {}

  dropDownClicked(): void {
    !this.ddStyling ? (this.ddStyling = true) : (this.ddStyling = false);
    this.ddStatus === 'ddClosed'
      ? (this.ddStatus = 'ddOpened')
      : (this.ddStatus = 'ddClosed');
  }
}
