import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdXplorecertificateComponent } from './ed-xplorecertificate.component';

describe('EdXplorecertificateComponent', () => {
  let component: EdXplorecertificateComponent;
  let fixture: ComponentFixture<EdXplorecertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdXplorecertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdXplorecertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
