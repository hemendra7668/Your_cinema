import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketbookPage } from './ticketbook.page';

const routes: Routes = [
  {
    path: '',
    component: TicketbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketbookPageRoutingModule {}
