import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBITComponent } from './ibit.component';

describe('IBITComponent', () => {
  let component: IBITComponent;
  let fixture: ComponentFixture<IBITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
