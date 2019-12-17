import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesBeneficiarioComponent } from './notificaciones-beneficiario.component';

describe('NotificacionesBeneficiarioComponent', () => {
  let component: NotificacionesBeneficiarioComponent;
  let fixture: ComponentFixture<NotificacionesBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
