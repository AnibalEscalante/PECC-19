import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasInfoScreenComponent } from './postulaciones-activas-info-screen.component';

describe('PostulacionesActivasInfoScreenComponent', () => {
  let component: PostulacionesActivasInfoScreenComponent;
  let fixture: ComponentFixture<PostulacionesActivasInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
