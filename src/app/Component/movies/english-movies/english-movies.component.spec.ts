import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMoviesComponent } from './english-movies.component';

describe('EnglishMoviesComponent', () => {
  let component: EnglishMoviesComponent;
  let fixture: ComponentFixture<EnglishMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
