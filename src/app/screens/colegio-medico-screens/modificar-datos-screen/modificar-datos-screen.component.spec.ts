import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosScreenComponent } from './modificar-datos-screen.component';

describe('ModificarDatosScreenComponent', () => {
  let component: ModificarDatosScreenComponent;
  let fixture: ComponentFixture<ModificarDatosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDatosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
