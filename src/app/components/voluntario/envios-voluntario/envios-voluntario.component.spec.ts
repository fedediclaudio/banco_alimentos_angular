import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosVoluntarioComponent } from './envios-voluntario.component';

describe('EnviosVoluntarioComponent', () => {
  let component: EnviosVoluntarioComponent;
  let fixture: ComponentFixture<EnviosVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviosVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviosVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
