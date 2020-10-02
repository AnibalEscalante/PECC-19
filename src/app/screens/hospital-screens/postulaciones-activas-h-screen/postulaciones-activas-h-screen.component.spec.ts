import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasHScreenComponent } from './postulaciones-activas-h-screen.component';

describe('PostulacionesActivasHScreenComponent', () => {
  let component: PostulacionesActivasHScreenComponent;
  let fixture: ComponentFixture<PostulacionesActivasHScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasHScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasHScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
