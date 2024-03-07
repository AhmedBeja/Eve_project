import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancheCultureComponent } from './planche-culture.component';

describe('PlancheCultureComponent', () => {
  let component: PlancheCultureComponent;
  let fixture: ComponentFixture<PlancheCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlancheCultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlancheCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
