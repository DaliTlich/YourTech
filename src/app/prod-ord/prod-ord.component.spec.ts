import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdOrdComponent } from './prod-ord.component';

describe('ProdOrdComponent', () => {
  let component: ProdOrdComponent;
  let fixture: ComponentFixture<ProdOrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdOrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
