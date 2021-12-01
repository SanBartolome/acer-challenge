import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openLiveChannel(): void {
    window.open('https://www.facebook.com/Solicorn1506');
  }
}
