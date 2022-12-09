import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedcoursesComponent } from './featuredcourses.component';

describe('FeaturedcoursesComponent', () => {
  let component: FeaturedcoursesComponent;
  let fixture: ComponentFixture<FeaturedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
