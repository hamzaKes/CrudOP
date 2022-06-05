import {ComponentFixture, TestBed} from '@angular/core/testing';

import { KundenDashboardComponent } from './kunden-dashboard.component';
import {UntypedFormBuilder, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('KundenDashboardComponent', () => {
  let component: KundenDashboardComponent;
  let fixture: ComponentFixture<KundenDashboardComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule],
      declarations: [ KundenDashboardComponent ],
      providers: [UntypedFormBuilder,ReactiveFormsModule,HttpClientModule]

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
