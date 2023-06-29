import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitablesComponent } from './vegitables.component';

describe('VegitablesComponent', () => {
  let component: VegitablesComponent;
  let fixture: ComponentFixture<VegitablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegitablesComponent]
    });
    fixture = TestBed.createComponent(VegitablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
