import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAccessoiresComponent } from './prod-accessoires.component';

describe('ProdAccessoiresComponent', () => {
  let component: ProdAccessoiresComponent;
  let fixture: ComponentFixture<ProdAccessoiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdAccessoiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
