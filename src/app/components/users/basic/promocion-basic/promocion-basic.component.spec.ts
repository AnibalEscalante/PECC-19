import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionBasicComponent } from './promocion-basic.component';

describe('PromocionBasicComponent', () => {
  let component: PromocionBasicComponent;
  let fixture: ComponentFixture<PromocionBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
