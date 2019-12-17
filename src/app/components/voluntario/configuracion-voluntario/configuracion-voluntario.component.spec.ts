import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionVoluntarioComponent } from './configuracion-voluntario.component';

describe('ConfiguracionVoluntarioComponent', () => {
  let component: ConfiguracionVoluntarioComponent;
  let fixture: ComponentFixture<ConfiguracionVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
