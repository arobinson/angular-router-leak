import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrewWithModuleComponent } from './andrew-with-module.component';

describe('AndrewWithModuleComponent', () => {
  let component: AndrewWithModuleComponent;
  let fixture: ComponentFixture<AndrewWithModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndrewWithModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AndrewWithModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
