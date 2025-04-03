import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCalculateurComponent } from './recette-calculateur.component';

describe('RecetteCalculateurComponent', () => {
  let component: RecetteCalculateurComponent;
  let fixture: ComponentFixture<RecetteCalculateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetteCalculateurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteCalculateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
