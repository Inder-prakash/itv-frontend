import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTvComponent } from './play-tv.component';

describe('PlayTvComponent', () => {
  let component: PlayTvComponent;
  let fixture: ComponentFixture<PlayTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
