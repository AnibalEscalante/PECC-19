import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoScreenComponent } from './postulaciones-trabajo-screen.component';

describe('PostulacionesTrabajoScreenComponent', () => {
  let component: PostulacionesTrabajoScreenComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
