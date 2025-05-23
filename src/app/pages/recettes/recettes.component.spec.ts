import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecettesComponent } from './recettes.component';



describe('RecetteComponent', () => {
  let component: RecettesComponent;
  let fixture: ComponentFixture<RecettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
