import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFuncionarioScreenComponent } from './home-funcionario-screen.component';

describe('HomeFuncionarioScreenComponent', () => {
  let component: HomeFuncionarioScreenComponent;
  let fixture: ComponentFixture<HomeFuncionarioScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFuncionarioScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFuncionarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
