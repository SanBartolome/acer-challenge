import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LiveComponent],
  imports: [CommonModule, LiveRoutingModule, CoreModule, AppSharedModule],
})
export class LiveModule {}
