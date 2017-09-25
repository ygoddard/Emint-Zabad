import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwLoaderComponent } from './sw-loader.component';

describe('SwLoaderComponent', () => {
  let component: SwLoaderComponent;
  let fixture: ComponentFixture<SwLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
