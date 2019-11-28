import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOrganizacionDonanteComponent } from './vista-organizacion-donante.component';

describe('VistaOrganizacionDonanteComponent', () => {
  let component: VistaOrganizacionDonanteComponent;
  let fixture: ComponentFixture<VistaOrganizacionDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOrganizacionDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOrganizacionDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
