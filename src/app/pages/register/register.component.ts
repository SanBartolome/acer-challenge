import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { ApiUtil } from 'src/app/core/utils/api.util';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading$ = of(false);
  isFinished$ = of(false);
  stepNumber$ = of(1);

  constructor(private api: ApiUtil, private registerService: RegisterService) {}

  ngOnInit(): void {}

  updateStepNumber(event: number) {
    this.stepNumber$ = of(event);
  }

  sendEmail(event: boolean) {
    if (!event) {
      return;
    }
    this.isLoading$ = of(true);
    const team = this.registerService.registerTeam;
    let body = '';
    team
      .filter((member) => !!member.value.fullName)
      .forEach((member) => {
        body = body + 'Miembro ' + (team.indexOf(member) + 1) + ':\n';
        body = body + 'Nombres y apellidos: ' + member.value.fullName + '\n';
        body = body + 'Edad: ' + member.value.age + '\n';
        body = body + 'Fecha de nacimiento: ' + member.value.birthdate + '\n';
        body = body + 'Url de Steam: ' + member.value.steamUrl + '\n';
        body = body + 'Id steam: ' + member.value.steamId + '\n';
        body = body + 'Id de discord: ' + member.value.discordId + '\n';
        body = body + 'Correo electrónico: ' + member.value.email + '\n';
        body = body + 'Número de contacto: ' + member.value.phone + '\n';
      });
    this.api
      .post('/send-email', {
        subject: 'Registro de equipo',
        body,
      })
      .pipe(
        catchError((e) => of(e)),
        tap((e) => {
          this.isLoading$ = of(false);
          if (!!e.error) {
            alert('Hubo un error al enviar. Por favor, inténtelo nuevamente.');
            return;
          } else {
            this.isFinished$ = of(true);
          }
        })
      )
      .subscribe();
  }
}
