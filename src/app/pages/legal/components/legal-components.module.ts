import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { LegalNavbarComponent } from './legal-navbar/legal-navbar.component';
import { RegisterRulesComponent } from './register-rules/register-rules.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { AwardsAndScheduleComponent } from './awards-and-schedule/awards-and-schedule.component';

@NgModule({
  declarations: [
    LegalNavbarComponent,
    RegisterRulesComponent,
    GameRulesComponent,
    AwardsAndScheduleComponent,
  ],
  imports: [CommonModule, AppSharedModule],
  exports: [
    LegalNavbarComponent,
    RegisterRulesComponent,
    GameRulesComponent,
    AwardsAndScheduleComponent,
  ],
})
export class LegalComponentsModule {}
