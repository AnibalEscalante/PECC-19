import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasComponent } from './postulaciones-activas.component';

describe('PostulacionesActivasComponent', () => {
  let component: PostulacionesActivasComponent;
  let fixture: ComponentFixture<PostulacionesActivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
