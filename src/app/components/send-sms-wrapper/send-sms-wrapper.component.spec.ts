import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSmsWrapperComponent } from './send-sms-wrapper.component';

describe('SendSmsWrapperComponent', () => {
  let component: SendSmsWrapperComponent;
  let fixture: ComponentFixture<SendSmsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSmsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSmsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
