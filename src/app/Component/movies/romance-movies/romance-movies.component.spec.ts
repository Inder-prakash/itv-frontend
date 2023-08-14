import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceMoviesComponent } from './romance-movies.component';

describe('RomanceMoviesComponent', () => {
  let component: RomanceMoviesComponent;
  let fixture: ComponentFixture<RomanceMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanceMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanceMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
