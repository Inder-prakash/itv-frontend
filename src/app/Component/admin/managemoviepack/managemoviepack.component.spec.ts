import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemoviepackComponent } from './managemoviepack.component';

describe('ManagemoviepackComponent', () => {
  let component: ManagemoviepackComponent;
  let fixture: ComponentFixture<ManagemoviepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagemoviepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemoviepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
