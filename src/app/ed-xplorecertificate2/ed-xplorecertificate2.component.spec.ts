import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdXplorecertificate2Component } from './ed-xplorecertificate2.component';

describe('EdXplorecertificate2Component', () => {
  let component: EdXplorecertificate2Component;
  let fixture: ComponentFixture<EdXplorecertificate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdXplorecertificate2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdXplorecertificate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
