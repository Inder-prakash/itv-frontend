import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewserialsComponent } from './viewserials.component';

describe('ViewserialsComponent', () => {
  let component: ViewserialsComponent;
  let fixture: ComponentFixture<ViewserialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewserialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewserialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
