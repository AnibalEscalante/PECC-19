import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosHospComponent } from './modificar-datos-hosp.component';

describe('ModificarDatosHospComponent', () => {
  let component: ModificarDatosHospComponent;
  let fixture: ComponentFixture<ModificarDatosHospComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosHospComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
