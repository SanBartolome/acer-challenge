import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { LegalComponent } from './legal.component';
import { LegalComponentsModule } from './components/legal-components.module';

@NgModule({
  declarations: [LegalComponent],
  imports: [CommonModule, LegalRoutingModule, LegalComponentsModule],
})
export class LegalModule {}
