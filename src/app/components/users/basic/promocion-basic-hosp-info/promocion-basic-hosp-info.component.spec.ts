import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicHospInfoComponent } from './promocion-basic-hosp-info.component';

describe('PromocionBasicHospInfoComponent', () => {
  let component: PromocionBasicHospInfoComponent;
  let fixture: ComponentFixture<PromocionBasicHospInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicHospInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
