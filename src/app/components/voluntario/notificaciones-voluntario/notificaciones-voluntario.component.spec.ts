import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesVoluntarioComponent } from './notificaciones-voluntario.component';

describe('NotificacionesVoluntarioComponent', () => {
  let component: NotificacionesVoluntarioComponent;
  let fixture: ComponentFixture<NotificacionesVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
