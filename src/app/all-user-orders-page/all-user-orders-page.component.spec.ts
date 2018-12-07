import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserOrdersPageComponent } from './all-user-orders-page.component';

describe('AllUserOrdersPageComponent', () => {
  let component: AllUserOrdersPageComponent;
  let fixture: ComponentFixture<AllUserOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
