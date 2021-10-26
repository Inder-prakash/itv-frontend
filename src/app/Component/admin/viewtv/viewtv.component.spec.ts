import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtvComponent } from './viewtv.component';

describe('ViewtvComponent', () => {
  let component: ViewtvComponent;
  let fixture: ComponentFixture<ViewtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
