import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCmScreenComponent } from './home-cm-screen.component';

describe('HomeCmScreenComponent', () => {
  let component: HomeCmScreenComponent;
  let fixture: ComponentFixture<HomeCmScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCmScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCmScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
