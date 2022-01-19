import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [RulesComponent],
  imports: [
    CommonModule,
    RulesRoutingModule,
    AppSharedModule,
    NgxExtendedPdfViewerModule,
  ],
})
export class RulesModule {}
