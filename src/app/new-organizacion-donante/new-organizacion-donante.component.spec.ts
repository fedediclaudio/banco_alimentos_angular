import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrganizacionDonanteComponent } from './new-organizacion-donante.component';

describe('NewOrganizacionDonanteComponent', () => {
  let component: NewOrganizacionDonanteComponent;
  let fixture: ComponentFixture<NewOrganizacionDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrganizacionDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrganizacionDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
