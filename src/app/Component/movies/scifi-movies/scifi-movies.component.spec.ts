import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifiMoviesComponent } from './scifi-movies.component';

describe('ScifiMoviesComponent', () => {
  let component: ScifiMoviesComponent;
  let fixture: ComponentFixture<ScifiMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScifiMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScifiMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
