import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { DeviceFeatureComponent } from './device-feature/device-feature.component';
import { GradientButtonComponent } from './gradient-button/gradient-button.component';
import { SilverGradientButtonComponent } from './silver-gradient-button/silver-gradient-button.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [
    BrandsComponent,
    DeviceFeatureComponent,
    GradientButtonComponent,
    SilverGradientButtonComponent,
    HamburguerMenuComponent,
    InputComponent,
  ],
  declarations: [
    BrandsComponent,
    DeviceFeatureComponent,
    GradientButtonComponent,
    SilverGradientButtonComponent,
    HamburguerMenuComponent,
    InputComponent,
  ],
})
export class AppSharedComponentsModule {}
