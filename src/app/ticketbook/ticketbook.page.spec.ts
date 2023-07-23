import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketbookPage } from './ticketbook.page';

describe('TicketbookPage', () => {
  let component: TicketbookPage;
  let fixture: ComponentFixture<TicketbookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TicketbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
