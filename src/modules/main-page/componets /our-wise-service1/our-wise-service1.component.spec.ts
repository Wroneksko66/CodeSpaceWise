import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWiseService1Component } from './our-wise-service1.component';

describe('OurWiseService1Component', () => {
  let component: OurWiseService1Component;
  let fixture: ComponentFixture<OurWiseService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWiseService1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWiseService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
