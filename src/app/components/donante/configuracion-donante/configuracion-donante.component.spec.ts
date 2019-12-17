import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionDonanteComponent } from './configuracion-donante.component';

describe('ConfiguracionDonanteComponent', () => {
  let component: ConfiguracionDonanteComponent;
  let fixture: ComponentFixture<ConfiguracionDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
