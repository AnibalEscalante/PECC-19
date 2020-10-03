import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionHospitalComponent } from './situacion-hospital.component';

describe('SituacionHospitalComponent', () => {
  let component: SituacionHospitalComponent;
  let fixture: ComponentFixture<SituacionHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituacionHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacionHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
