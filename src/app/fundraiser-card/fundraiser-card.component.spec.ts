import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserCardComponent } from './fundraiser-card.component';

describe('FundraiserCardComponent', () => {
  let component: FundraiserCardComponent;
  let fixture: ComponentFixture<FundraiserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraiserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraiserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
