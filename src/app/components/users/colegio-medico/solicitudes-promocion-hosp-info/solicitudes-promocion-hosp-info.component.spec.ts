import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionHospInfoComponent } from './solicitudes-promocion-hosp-info.component';

describe('SolicitudesPromocionHospInfoComponent', () => {
  let component: SolicitudesPromocionHospInfoComponent;
  let fixture: ComponentFixture<SolicitudesPromocionHospInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionHospInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
