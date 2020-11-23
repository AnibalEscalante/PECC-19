import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarCvFuncionarioScreenComponent } from './cargar-cv-funcionario-screen.component';

describe('CargarCvFuncionarioScreenComponent', () => {
  let component: CargarCvFuncionarioScreenComponent;
  let fixture: ComponentFixture<CargarCvFuncionarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarCvFuncionarioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarCvFuncionarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
