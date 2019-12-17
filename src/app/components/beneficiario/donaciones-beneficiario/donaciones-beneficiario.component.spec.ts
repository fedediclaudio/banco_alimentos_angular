import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesBeneficiarioComponent } from './donaciones-beneficiario.component';

describe('DonacionesBeneficiarioComponent', () => {
  let component: DonacionesBeneficiarioComponent;
  let fixture: ComponentFixture<DonacionesBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionesBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
