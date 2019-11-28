import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEnvioComponent } from './vista-envio.component';

describe('VistaEnvioComponent', () => {
  let component: VistaEnvioComponent;
  let fixture: ComponentFixture<VistaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
