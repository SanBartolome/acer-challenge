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
    // window.open(
    //   'https://app.firstblood.io/dota/tournaments/details/9570/overview'
    // );
  }

  openTutorial(): void {
    window.open('https://youtu.be/MBUd15S0Yok');
  }
}
