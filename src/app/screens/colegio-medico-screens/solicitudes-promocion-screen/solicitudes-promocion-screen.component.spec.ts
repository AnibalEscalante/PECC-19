import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionScreenComponent } from './solicitudes-promocion-screen.component';

describe('SolicitudesPromocionScreenComponent', () => {
  let component: SolicitudesPromocionScreenComponent;
  let fixture: ComponentFixture<SolicitudesPromocionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
