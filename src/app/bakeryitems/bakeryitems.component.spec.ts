import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryitemsComponent } from './bakeryitems.component';

describe('BakeryitemsComponent', () => {
  let component: BakeryitemsComponent;
  let fixture: ComponentFixture<BakeryitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BakeryitemsComponent]
    });
    fixture = TestBed.createComponent(BakeryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
