import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebyStatusComponent } from './movieby-status.component';

describe('MoviebyStatusComponent', () => {
  let component: MoviebyStatusComponent;
  let fixture: ComponentFixture<MoviebyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviebyStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
