import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipaComponent } from './lipa.component';

describe('LipaComponent', () => {
  let component: LipaComponent;
  let fixture: ComponentFixture<LipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
