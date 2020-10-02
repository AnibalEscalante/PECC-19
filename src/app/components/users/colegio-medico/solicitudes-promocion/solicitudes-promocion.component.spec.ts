import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionComponent } from './solicitudes-promocion.component';

describe('SolicitudesPromocionComponent', () => {
  let component: SolicitudesPromocionComponent;
  let fixture: ComponentFixture<SolicitudesPromocionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
