import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openProductInShop(): void {
    window.open('http://bit.ly/AMDNitro5');
  }
}
