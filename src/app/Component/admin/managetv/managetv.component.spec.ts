import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetvComponent } from './managetv.component';

describe('ManagetvComponent', () => {
  let component: ManagetvComponent;
  let fixture: ComponentFixture<ManagetvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagetvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
