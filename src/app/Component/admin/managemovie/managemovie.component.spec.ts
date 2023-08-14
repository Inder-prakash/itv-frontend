import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemovieComponent } from './managemovie.component';

describe('ManagemovieComponent', () => {
  let component: ManagemovieComponent;
  let fixture: ComponentFixture<ManagemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
