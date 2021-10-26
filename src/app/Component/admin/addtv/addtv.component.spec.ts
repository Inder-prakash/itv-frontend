import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtvComponent } from './addtv.component';

describe('AddtvComponent', () => {
  let component: AddtvComponent;
  let fixture: ComponentFixture<AddtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
