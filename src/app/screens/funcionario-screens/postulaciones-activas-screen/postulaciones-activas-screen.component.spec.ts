import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasScreenComponent } from './postulaciones-activas-screen.component';

describe('PostulacionesActivasScreenComponent', () => {
  let component: PostulacionesActivasScreenComponent;
  let fixture: ComponentFixture<PostulacionesActivasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
