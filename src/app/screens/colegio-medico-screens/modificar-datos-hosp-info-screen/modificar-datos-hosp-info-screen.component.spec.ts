import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosHospInfoScreenComponent } from './modificar-datos-hosp-info-screen.component';

describe('ModificarDatosHospInfoScreenComponent', () => {
  let component: ModificarDatosHospInfoScreenComponent;
  let fixture: ComponentFixture<ModificarDatosHospInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosHospInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosHospInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
