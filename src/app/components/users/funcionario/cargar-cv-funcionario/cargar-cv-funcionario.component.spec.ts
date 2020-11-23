import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarCvFuncionarioComponent } from './cargar-cv-funcionario.component';

describe('CargarCvFuncionarioComponent', () => {
  let component: CargarCvFuncionarioComponent;
  let fixture: ComponentFixture<CargarCvFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarCvFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarCvFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
