import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoviepackComponent } from './addmoviepack.component';

describe('AddmoviepackComponent', () => {
  let component: AddmoviepackComponent;
  let fixture: ComponentFixture<AddmoviepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoviepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoviepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
