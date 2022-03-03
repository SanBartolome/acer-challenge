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
      'https://docs.google.com/forms/d/e/1FAIpQLSegLc1E4nl9PcgetkSySzz5mYHRJyMBVbfdBhhWAsIBedB_2Q/viewform'
    );
  }

  openTutorial(): void {
    // window.open('https://discord.gg/DB5PbBEja3');
  }
}
