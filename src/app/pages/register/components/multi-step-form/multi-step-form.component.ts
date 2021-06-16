import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiStepFormComponent implements OnInit {
  @Input() playerTitle: string;
  @Input() stepNumber: number;
  @Input() disabled = false;
  @Output() updatedStepNumber = new EventEmitter<number>();
  @Output() registerFinished = new EventEmitter<boolean>(false);
  formGroup: FormGroup;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.formGroup = this.registerService.registerTeam[this.stepNumber - 1];
  }

  backStep(): void {
    this.updatedStepNumber.emit(this.stepNumber - 1);
  }

  nextStep() {
    if (this.formGroup.invalid) {
      alert('Formulario inválido. Por favor, revise los campos.');
      return;
    }
    this.registerService.updateFormGroup(this.formGroup, this.stepNumber - 1);
    this.updatedStepNumber.emit(this.stepNumber + 1);
  }

  register() {
    if (this.formGroup.invalid) {
      alert('Formulario inválido. Por favor, revise los campos.');
      return;
    }
    this.registerService.updateFormGroup(this.formGroup, this.stepNumber - 1);
    this.registerFinished.emit(true);
  }
}
