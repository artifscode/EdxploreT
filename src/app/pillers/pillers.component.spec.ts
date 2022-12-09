import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillersComponent } from './pillers.component';

describe('PillersComponent', () => {
  let component: PillersComponent;
  let fixture: ComponentFixture<PillersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PillersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
