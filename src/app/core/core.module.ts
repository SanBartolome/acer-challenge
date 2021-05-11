import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppCoreComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppCoreComponentsModule],
  exports: [AppCoreComponentsModule],
})
export class CoreModule {}
