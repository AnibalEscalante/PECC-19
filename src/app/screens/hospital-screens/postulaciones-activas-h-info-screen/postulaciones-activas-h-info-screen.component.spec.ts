import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesActivasHInfoScreenComponent } from './postulaciones-activas-h-info-screen.component';

describe('PostulacionesActivasHInfoScreenComponent', () => {
  let component: PostulacionesActivasHInfoScreenComponent;
  let fixture: ComponentFixture<PostulacionesActivasHInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulacionesActivasHInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesActivasHInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
