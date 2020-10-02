import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasInfoComponent } from './postulaciones-activas-info.component';

describe('PostulacionesActivasInfoComponent', () => {
  let component: PostulacionesActivasInfoComponent;
  let fixture: ComponentFixture<PostulacionesActivasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
