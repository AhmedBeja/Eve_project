import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnergyComponent } from './view-energy.component';

describe('ViewEnergyComponent', () => {
  let component: ViewEnergyComponent;
  let fixture: ComponentFixture<ViewEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEnergyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
