import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOrganizacionBeneficiariaComponent } from './vista-organizacion-beneficiaria.component';

describe('VistaOrganizacionBeneficiariaComponent', () => {
  let component: VistaOrganizacionBeneficiariaComponent;
  let fixture: ComponentFixture<VistaOrganizacionBeneficiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOrganizacionBeneficiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOrganizacionBeneficiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
