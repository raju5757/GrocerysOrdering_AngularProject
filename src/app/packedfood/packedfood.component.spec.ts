import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackedfoodComponent } from './packedfood.component';

describe('PackedfoodComponent', () => {
  let component: PackedfoodComponent;
  let fixture: ComponentFixture<PackedfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackedfoodComponent]
    });
    fixture = TestBed.createComponent(PackedfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
