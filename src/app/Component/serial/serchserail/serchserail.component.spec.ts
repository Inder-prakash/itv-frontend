import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchserailComponent } from './serchserail.component';

describe('SerchserailComponent', () => {
  let component: SerchserailComponent;
  let fixture: ComponentFixture<SerchserailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchserailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchserailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
