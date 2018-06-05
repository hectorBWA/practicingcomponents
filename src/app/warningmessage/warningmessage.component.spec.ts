import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningmessageComponent } from './warningmessage.component';

describe('WarningmessageComponent', () => {
  let component: WarningmessageComponent;
  let fixture: ComponentFixture<WarningmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
