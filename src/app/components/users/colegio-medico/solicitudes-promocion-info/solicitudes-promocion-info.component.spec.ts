import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesPromocionInfoComponent } from './solicitudes-promocion-info.component';

describe('SolicitudesPromocionInfoComponent', () => {
  let component: SolicitudesPromocionInfoComponent;
  let fixture: ComponentFixture<SolicitudesPromocionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesPromocionInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesPromocionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
