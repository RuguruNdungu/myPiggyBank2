import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherphoneComponent } from './otherphone.component';

describe('OtherphoneComponent', () => {
  let component: OtherphoneComponent;
  let fixture: ComponentFixture<OtherphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
