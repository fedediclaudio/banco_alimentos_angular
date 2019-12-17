import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAdminComponent } from './configuracion-admin.component';

describe('ConfiguracionAdminComponent', () => {
  let component: ConfiguracionAdminComponent;
  let fixture: ComponentFixture<ConfiguracionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
