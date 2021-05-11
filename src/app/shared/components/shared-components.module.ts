import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { DeviceFeatureComponent } from './device-feature/device-feature.component';
import { GradientButtonComponent } from './gradient-button/gradient-button.component';
import { SilverGradientButtonComponent } from './silver-gradient-button/silver-gradient-button.component';

@NgModule({
  imports: [RouterModule],
  exports: [
    BrandsComponent,
    DeviceFeatureComponent,
    GradientButtonComponent,
    SilverGradientButtonComponent,
  ],
  declarations: [
    BrandsComponent,
    DeviceFeatureComponent,
    GradientButtonComponent,
    SilverGradientButtonComponent,
  ],
})
export class AppSharedComponentsModule {}
