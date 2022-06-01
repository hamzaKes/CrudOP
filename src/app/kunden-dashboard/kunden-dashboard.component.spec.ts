import {ComponentFixture, TestBed} from '@angular/core/testing';

import { KundenDashboardComponent } from './kunden-dashboard.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

describe('KundenDashboardComponent', () => {
  let component: KundenDashboardComponent;
  let fixture: ComponentFixture<KundenDashboardComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ KundenDashboardComponent ],
      providers: [FormBuilder,ReactiveFormsModule]

    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(KundenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should show title ', () => {
    expect(fixture.nativeElement.querySelector('[data-test="Title"]')).toBeTruthy();
  });


  it('should show table ', () => {
    expect(fixture.nativeElement.querySelectorAll('.attributes').length).toBe(5);
  });



});
