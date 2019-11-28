import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVoluntarioComponent } from './vista-voluntario.component';

describe('VistaVoluntarioComponent', () => {
  let component: VistaVoluntarioComponent;
  let fixture: ComponentFixture<VistaVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
