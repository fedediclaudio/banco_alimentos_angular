import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionBeneficiarioComponent } from './configuracion-beneficiario.component';

describe('ConfiguracionBeneficiarioComponent', () => {
  let component: ConfiguracionBeneficiarioComponent;
  let fixture: ComponentFixture<ConfiguracionBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
