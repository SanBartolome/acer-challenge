import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [ShellComponent, FooterComponent, NavbarComponent],
  exports: [ShellComponent],
})
export class AppCoreComponentsModule {}
