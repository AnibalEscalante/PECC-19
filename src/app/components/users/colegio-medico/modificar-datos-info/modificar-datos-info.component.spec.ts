import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosInfoComponent } from './modificar-datos-info.component';

describe('ModificarDatosInfoComponent', () => {
  let component: ModificarDatosInfoComponent;
  let fixture: ComponentFixture<ModificarDatosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
