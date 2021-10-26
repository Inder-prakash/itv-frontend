import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviepackComponent } from './moviepack.component';

describe('MoviepackComponent', () => {
  let component: MoviepackComponent;
  let fixture: ComponentFixture<MoviepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviepackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
