import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioBeneficiarioComponent } from './inicio-beneficiario.component';

describe('InicioBeneficiarioComponent', () => {
  let component: InicioBeneficiarioComponent;
  let fixture: ComponentFixture<InicioBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
