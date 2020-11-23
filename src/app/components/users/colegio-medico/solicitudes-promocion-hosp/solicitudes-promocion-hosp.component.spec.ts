import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionHospComponent } from './solicitudes-promocion-hosp.component';

describe('SolicitudesPromocionHospComponent', () => {
  let component: SolicitudesPromocionHospComponent;
  let fixture: ComponentFixture<SolicitudesPromocionHospComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionHospComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
