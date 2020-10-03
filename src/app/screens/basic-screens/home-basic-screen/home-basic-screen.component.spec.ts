import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasicScreenComponent } from './home-basic-screen.component';

describe('HomeBasicScreenComponent', () => {
  let component: HomeBasicScreenComponent;
  let fixture: ComponentFixture<HomeBasicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasicScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
