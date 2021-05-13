import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { LegalNavbarComponent } from './legal-navbar/legal-navbar.component';

@NgModule({
  declarations: [LegalNavbarComponent],
  imports: [CommonModule, AppSharedModule],
  exports: [LegalNavbarComponent],
})
export class LegalComponentsModule {}
