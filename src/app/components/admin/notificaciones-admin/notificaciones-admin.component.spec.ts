import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesAdminComponent } from './notificaciones-admin.component';

describe('NotificacionesAdminComponent', () => {
  let component: NotificacionesAdminComponent;
  let fixture: ComponentFixture<NotificacionesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
