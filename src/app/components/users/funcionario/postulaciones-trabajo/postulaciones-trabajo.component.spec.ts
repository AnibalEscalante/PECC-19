import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoComponent } from './postulaciones-trabajo.component';

describe('PostulacionesTrabajoComponent', () => {
  let component: PostulacionesTrabajoComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
