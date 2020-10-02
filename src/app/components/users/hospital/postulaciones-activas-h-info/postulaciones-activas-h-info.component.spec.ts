import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasHInfoComponent } from './postulaciones-activas-h-info.component';

describe('PostulacionesActivasHInfoComponent', () => {
  let component: PostulacionesActivasHInfoComponent;
  let fixture: ComponentFixture<PostulacionesActivasHInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasHInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasHInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
