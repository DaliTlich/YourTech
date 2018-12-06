import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffErreurComponent } from './aff-erreur.component';

describe('AffErreurComponent', () => {
  let component: AffErreurComponent;
  let fixture: ComponentFixture<AffErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
