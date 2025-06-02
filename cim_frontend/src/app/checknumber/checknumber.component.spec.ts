import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ChecknumberComponent } from './checknumber.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ChecknumberComponent', () => {
  let component: ChecknumberComponent;
  let fixture: ComponentFixture<ChecknumberComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ChecknumberComponent],
    });

    fixture = TestBed.createComponent(ChecknumberComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate on valid number', fakeAsync(() => {
    component.phoneNumber = '9998887776';
    component.verifyNumber();
    const req = httpMock.expectOne('http://localhost:1010/checknumber?phoneNumber=9998887776');
    expect(req.request.method).toBe('GET');
    req.flush(true);

    tick();
    expect(component.errorMessage).toBe('');
  }));

  it('should show error on invalid number', fakeAsync(() => {
    component.phoneNumber = '1234567890';
    component.verifyNumber();

    const req = httpMock.expectOne('http://localhost:1010/checknumber?phoneNumber=1234567890');
    expect(req.request.method).toBe('GET');
    req.flush(false);

    tick();
    expect(component.errorMessage).toContain('Mobile number not found');
  }));

  it('should show validation error for invalid input', () => {
    component.phoneNumber = '123';  
    component.verifyNumber();

    expect(component.errorMessage).toBe('Please enter a valid mobile number.');
  });
});
