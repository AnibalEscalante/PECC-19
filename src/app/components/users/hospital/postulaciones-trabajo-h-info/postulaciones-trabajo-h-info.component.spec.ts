import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoHInfoComponent } from './postulaciones-trabajo-h-info.component';

describe('PostulacionesTrabajoHInfoComponent', () => {
  let component: PostulacionesTrabajoHInfoComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoHInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoHInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoHInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
