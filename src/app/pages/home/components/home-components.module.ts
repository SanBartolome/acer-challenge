import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './first-section/first-section.component';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
  ],
  imports: [CommonModule, AppSharedModule, CoreModule],
  exports: [
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
  ],
})
export class HomeComponentsModule {}
