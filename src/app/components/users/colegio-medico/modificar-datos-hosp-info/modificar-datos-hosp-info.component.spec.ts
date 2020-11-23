import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosHospInfoComponent } from './modificar-datos-hosp-info.component';

describe('ModificarDatosHospInfoComponent', () => {
  let component: ModificarDatosHospInfoComponent;
  let fixture: ComponentFixture<ModificarDatosHospInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosHospInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
