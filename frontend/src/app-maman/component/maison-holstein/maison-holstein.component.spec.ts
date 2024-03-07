import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHolsteinComponent } from './maison-holstein.component';

describe('MaisonHolsteinComponent', () => {
  let component: MaisonHolsteinComponent;
  let fixture: ComponentFixture<MaisonHolsteinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisonHolsteinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaisonHolsteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
