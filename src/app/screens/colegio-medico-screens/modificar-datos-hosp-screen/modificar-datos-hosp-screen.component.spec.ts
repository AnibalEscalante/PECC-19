import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosHospScreenComponent } from './modificar-datos-hosp-screen.component';

describe('ModificarDatosHospScreenComponent', () => {
  let component: ModificarDatosHospScreenComponent;
  let fixture: ComponentFixture<ModificarDatosHospScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosHospScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosHospScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
