import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosInfoScreenComponent } from './modificar-datos-info-screen.component';

describe('ModificarDatosInfoScreenComponent', () => {
  let component: ModificarDatosInfoScreenComponent;
  let fixture: ComponentFixture<ModificarDatosInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
