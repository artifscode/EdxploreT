import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionbannerComponent } from './subscriptionbanner.component';

describe('SubscriptionbannerComponent', () => {
  let component: SubscriptionbannerComponent;
  let fixture: ComponentFixture<SubscriptionbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
