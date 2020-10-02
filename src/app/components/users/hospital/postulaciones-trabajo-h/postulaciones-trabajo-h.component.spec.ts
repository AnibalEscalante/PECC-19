import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoHComponent } from './postulaciones-trabajo-h.component';

describe('PostulacionesTrabajoHComponent', () => {
  let component: PostulacionesTrabajoHComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
