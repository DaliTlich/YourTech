import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTelComponent } from './prod-tel.component';

describe('ProdTelComponent', () => {
  let component: ProdTelComponent;
  let fixture: ComponentFixture<ProdTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
