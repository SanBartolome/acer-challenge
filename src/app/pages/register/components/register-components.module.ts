import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MultiStepFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppSharedModule],
  exports: [MultiStepFormComponent],
})
export class RegisterComponentsModule {}
