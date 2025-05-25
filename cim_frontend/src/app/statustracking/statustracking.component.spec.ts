import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatustrackingComponent } from './statustracking.component';

describe('StatustrackingComponent', () => {
  let component: StatustrackingComponent;
  let fixture: ComponentFixture<StatustrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatustrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatustrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
