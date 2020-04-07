import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PAMMComponent } from './pamm.component';

describe('PAMMComponent', () => {
  let component: PAMMComponent;
  let fixture: ComponentFixture<PAMMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PAMMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PAMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
