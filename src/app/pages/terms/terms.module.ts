import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, TermsRoutingModule, AppSharedModule],
})
export class TermsModule {}
