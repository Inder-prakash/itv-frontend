import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiMoviesComponent } from './hindi-movies.component';

describe('HindiMoviesComponent', () => {
  let component: HindiMoviesComponent;
  let fixture: ComponentFixture<HindiMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HindiMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
