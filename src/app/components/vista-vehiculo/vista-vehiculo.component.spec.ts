import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVehiculoComponent } from './vista-vehiculo.component';

describe('VistaVehiculoComponent', () => {
  let component: VistaVehiculoComponent;
  let fixture: ComponentFixture<VistaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
