import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBultosComponent } from './lista-bultos.component';

describe('ListaBultosComponent', () => {
  let component: ListaBultosComponent;
  let fixture: ComponentFixture<ListaBultosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBultosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
