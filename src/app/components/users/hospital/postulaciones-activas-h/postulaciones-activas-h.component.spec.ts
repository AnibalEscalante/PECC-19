import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasHComponent } from './postulaciones-activas-h.component';

describe('PostulacionesActivasHComponent', () => {
  let component: PostulacionesActivasHComponent;
  let fixture: ComponentFixture<PostulacionesActivasHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
