import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrusReportComponent } from './lrus-report.component';

describe('LrusReportComponent', () => {
  let component: LrusReportComponent;
  let fixture: ComponentFixture<LrusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
