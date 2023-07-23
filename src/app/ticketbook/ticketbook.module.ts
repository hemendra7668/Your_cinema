import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketbookPageRoutingModule } from './ticketbook-routing.module';

import { TicketbookPage } from './ticketbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketbookPageRoutingModule
  ],
  declarations: [TicketbookPage]
})
export class TicketbookPageModule {}
