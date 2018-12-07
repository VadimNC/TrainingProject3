import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTabsPageComponent } from './vertical-tabs-page.component';

describe('VerticalTabsPageComponent', () => {
  let component: VerticalTabsPageComponent;
  let fixture: ComponentFixture<VerticalTabsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalTabsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
