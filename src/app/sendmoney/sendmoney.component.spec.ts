import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sendmoneyComponent } from './sendmoney.component';

describe('SendmoneyComponent', () => {
  let component: sendmoneyComponent;
  let fixture: ComponentFixture<sendmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ sendmoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sendmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
