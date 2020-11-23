import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicHospInfoScreenComponent } from './promocion-basic-hosp-info-screen.component';

describe('PromocionBasicHospInfoScreenComponent', () => {
  let component: PromocionBasicHospInfoScreenComponent;
  let fixture: ComponentFixture<PromocionBasicHospInfoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicHospInfoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicHospInfoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
