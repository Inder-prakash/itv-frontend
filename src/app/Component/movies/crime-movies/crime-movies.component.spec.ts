import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeMoviesComponent } from './crime-movies.component';

describe('CrimeMoviesComponent', () => {
  let component: CrimeMoviesComponent;
  let fixture: ComponentFixture<CrimeMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrimeMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
