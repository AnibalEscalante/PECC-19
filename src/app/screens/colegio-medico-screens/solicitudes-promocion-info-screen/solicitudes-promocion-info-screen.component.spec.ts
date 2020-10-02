import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionInfoScreenComponent } from './solicitudes-promocion-info-screen.component';

describe('SolicitudesPromocionInfoScreenComponent', () => {
  let component: SolicitudesPromocionInfoScreenComponent;
  let fixture: ComponentFixture<SolicitudesPromocionInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
