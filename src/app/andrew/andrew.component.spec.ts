import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewComponent } from './andrew.component';

describe('AndrewComponent', () => {
  let component: AndrewComponent;
  let fixture: ComponentFixture<AndrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndrewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
