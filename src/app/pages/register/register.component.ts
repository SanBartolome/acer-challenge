import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { ApiUtil } from 'src/app/core/utils/api.util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFG: FormGroup;
  loading: Observable<boolean>;

  constructor(private api: ApiUtil, private fb: FormBuilder) {
    this.registerFG = this.fb.group({
      teamName: ['', [Validators.required]],
      firstMember: ['', [Validators.required]],
      secondMember: ['', [Validators.required]],
      thirdMember: ['', [Validators.required]],
      fourthMember: ['', [Validators.required]],
      fifthMember: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/.+@.+\..+/)]],
      cellphone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    });
  }

  ngOnInit(): void {}

  sendEmail(): void {
    // if (this.registerFG.invalid) {
    //   return;
    // }
    this.loading = of(true);
    this.api
      .post('/send-email', { subject: 'Prueba', body: 'Esto es una prueba' })
      .pipe(
        catchError((e) => of(e)),
        tap((e) => {
          this.loading = of(false);
          if (!!e.error) {
            console.log('No enviado');
          } else {
            console.log('Enviado');
          }
        })
      )
      .subscribe();
  }
}
