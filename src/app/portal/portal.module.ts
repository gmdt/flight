import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideComponent } from './left-side/left-side.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BotSideComponent } from './bot-side/bot-side.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LeftSideComponent, BotSideComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [LeftSideComponent, BotSideComponent],
})
export class PortalModule {}
