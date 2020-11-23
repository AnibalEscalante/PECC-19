import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionHospInfoScreenComponent } from './solicitudes-promocion-hosp-info-screen.component';

describe('SolicitudesPromocionHospInfoScreenComponent', () => {
  let component: SolicitudesPromocionHospInfoScreenComponent;
  let fixture: ComponentFixture<SolicitudesPromocionHospInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionHospInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionHospInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
