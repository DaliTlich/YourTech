import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjSuppProdComponent } from './aj-supp-prod.component';

describe('AjSuppProdComponent', () => {
  let component: AjSuppProdComponent;
  let fixture: ComponentFixture<AjSuppProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjSuppProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjSuppProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
