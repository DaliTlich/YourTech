import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffproduitsComponent } from './affproduits.component';

describe('AffproduitsComponent', () => {
  let component: AffproduitsComponent;
  let fixture: ComponentFixture<AffproduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffproduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
