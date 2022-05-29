import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenDashboardComponent } from './kunden-dashboard.component';

describe('KundenDashboardComponent', () => {
  let component: KundenDashboardComponent;
  let fixture: ComponentFixture<KundenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundenDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
