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
      'https://battlefy.com/qwerstudios/valorant-acer-challenge-perú-2023/64e3c880d4c5f07dc8c26a5b/info'
    );
  }

  openTutorial(): void {
    // window.open('https://discord.gg/DB5PbBEja3');
  }
}
