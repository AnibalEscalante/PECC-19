import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicScreenInfoComponent } from './promocion-basic-screen-info.component';

describe('PromocionBasicScreenInfoComponent', () => {
  let component: PromocionBasicScreenInfoComponent;
  let fixture: ComponentFixture<PromocionBasicScreenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicScreenInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicScreenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
