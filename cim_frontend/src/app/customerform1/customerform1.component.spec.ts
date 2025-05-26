import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerform1Component } from './customerform1.component';

describe('Customerform1Component', () => {
  let component: Customerform1Component;
  let fixture: ComponentFixture<Customerform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customerform1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
