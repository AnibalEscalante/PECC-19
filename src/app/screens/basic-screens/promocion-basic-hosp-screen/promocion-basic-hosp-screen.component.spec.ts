import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicHospScreenComponent } from './promocion-basic-hosp-screen.component';

describe('PromocionBasicHospScreenComponent', () => {
  let component: PromocionBasicHospScreenComponent;
  let fixture: ComponentFixture<PromocionBasicHospScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicHospScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicHospScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
