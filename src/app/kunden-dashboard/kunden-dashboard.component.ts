import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kunden-dashboard',
  templateUrl: './kunden-dashboard.component.html',
  styleUrls: ['./kunden-dashboard.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class KundenDashboardComponent implements OnInit {


  formValue !: FormGroup;
  constructor(private formbuilder:FormBuilder, config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
  this.formValue = this.formbuilder.group({
    Id: [''],
    Name: [''],
    Vorname: [''],
    Email: ['']
  });
  }
  open(content: any) {
    this.modalService.open(content);
  }

}
