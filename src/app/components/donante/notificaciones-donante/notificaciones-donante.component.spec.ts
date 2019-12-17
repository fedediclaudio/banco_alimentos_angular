import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesDonanteComponent } from './notificaciones-donante.component';

describe('NotificacionesDonanteComponent', () => {
  let component: NotificacionesDonanteComponent;
  let fixture: ComponentFixture<NotificacionesDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
