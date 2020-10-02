import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoInfoScreenComponent } from './postulaciones-trabajo-info-screen.component';

describe('PostulacionesTrabajoInfoScreenComponent', () => {
  let component: PostulacionesTrabajoInfoScreenComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
