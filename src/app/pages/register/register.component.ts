import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openRegister(): void {
    window.open(
      'https://battlefy.com/acer/acer-challenge-1vs1/61e6504b62270c359ecd0c3b/info'
    );
  }

  openTutorial(): void {
    window.open('https://discord.gg/DB5PbBEja3');
  }
}
