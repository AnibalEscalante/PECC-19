import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHospitalScreenComponent } from './home-hospital-screen.component';

describe('HomeHospitalScreenComponent', () => {
  let component: HomeHospitalScreenComponent;
  let fixture: ComponentFixture<HomeHospitalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHospitalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHospitalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
