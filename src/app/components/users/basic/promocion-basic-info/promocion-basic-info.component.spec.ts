import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicInfoComponent } from './promocion-basic-info.component';

describe('PromocionBasicInfoComponent', () => {
  let component: PromocionBasicInfoComponent;
  let fixture: ComponentFixture<PromocionBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
