import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVoluntarioComponent } from './inicio-voluntario.component';

describe('InicioVoluntarioComponent', () => {
  let component: InicioVoluntarioComponent;
  let fixture: ComponentFixture<InicioVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
