import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterComponentsModule } from './components/register-components.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    RegisterComponentsModule,
    CoreModule,
  ],
})
export class RegisterModule {}
