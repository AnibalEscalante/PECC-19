import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicScreenComponent } from './promocion-basic-screen.component';

describe('PromocionBasicScreenComponent', () => {
  let component: PromocionBasicScreenComponent;
  let fixture: ComponentFixture<PromocionBasicScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
