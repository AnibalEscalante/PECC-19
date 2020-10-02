import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoHScreenComponent } from './postulaciones-trabajo-h-screen.component';

describe('PostulacionesTrabajoHScreenComponent', () => {
  let component: PostulacionesTrabajoHScreenComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoHScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoHScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoHScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
