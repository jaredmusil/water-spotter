import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from './state/state.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StateComponent, LandingComponent]
})
export class UiModule {}
