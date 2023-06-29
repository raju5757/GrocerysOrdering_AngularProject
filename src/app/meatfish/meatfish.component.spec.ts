import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatfishComponent } from './meatfish.component';

describe('MeatfishComponent', () => {
  let component: MeatfishComponent;
  let fixture: ComponentFixture<MeatfishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeatfishComponent]
    });
    fixture = TestBed.createComponent(MeatfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
