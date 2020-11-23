import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionHospScreenComponent } from './solicitudes-promocion-hosp-screen.component';

describe('SolicitudesPromocionHospScreenComponent', () => {
  let component: SolicitudesPromocionHospScreenComponent;
  let fixture: ComponentFixture<SolicitudesPromocionHospScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionHospScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionHospScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
