import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionDonanteComponent } from './organizacion-donante.component';

describe('OrganizacionDonanteComponent', () => {
  let component: OrganizacionDonanteComponent;
  let fixture: ComponentFixture<OrganizacionDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
