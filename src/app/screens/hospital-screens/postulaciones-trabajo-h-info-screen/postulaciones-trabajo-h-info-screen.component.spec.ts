import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesTrabajoHInfoScreenComponent } from './postulaciones-trabajo-h-info-screen.component';

describe('PostulacionesTrabajoHInfoScreenComponent', () => {
  let component: PostulacionesTrabajoHInfoScreenComponent;
  let fixture: ComponentFixture<PostulacionesTrabajoHInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesTrabajoHInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesTrabajoHInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
