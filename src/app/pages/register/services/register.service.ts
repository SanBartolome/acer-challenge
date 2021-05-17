import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  registerTeam: FormGroup[];

  constructor(private fb: FormBuilder) {
    this.registerTeam = [
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
      this.createCommonMemberFG(),
    ];
  }

  createCommonMemberFG() {
    return this.fb.group({
      fullName: [
        null,
        [Validators.required, Validators.pattern(/^[A-Za-zñÑá-úÁ-Ú ]*$/)],
      ],
      age: [null, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      birthdate: [null, [Validators.required]],
      steamUrl: [null, [Validators.required]],
      steamId: [null, [Validators.required]],
      discordId: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(/.+@.+\..+/)]],
      phone: [null, [Validators.required, Validators.pattern(/^\d{9}$/)]],
    });
  }

  updateFormGroup(formGroup: FormGroup, index: number) {
    this.registerTeam[index] = formGroup;
  }
}
