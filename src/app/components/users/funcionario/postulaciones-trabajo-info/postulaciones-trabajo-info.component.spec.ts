import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoInfoComponent } from './postulaciones-trabajo-info.component';

describe('PostulacionesTrabajoInfoComponent', () => {
  let component: PostulacionesTrabajoInfoComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
