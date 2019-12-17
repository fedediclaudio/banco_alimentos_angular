import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBultosDonanteComponent } from './lista-bultos-donante.component';

describe('ListaBultosDonanteComponent', () => {
  let component: ListaBultosDonanteComponent;
  let fixture: ComponentFixture<ListaBultosDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBultosDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBultosDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
