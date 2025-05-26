import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerform2Component } from './customerform2.component';

describe('Customerform2Component', () => {
  let component: Customerform2Component;
  let fixture: ComponentFixture<Customerform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerform2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
