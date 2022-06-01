import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup} from "@angular/forms";
import {KundenModel} from "../Kunden-Model";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-kunden-dashboard',
  templateUrl: './kunden-dashboard.component.html',
  styleUrls: ['./kunden-dashboard.component.css'],
})
export class KundenDashboardComponent implements OnInit {

  formvalue: FormGroup = new FormGroup({
    Id: new FormControl(['']),
    Name: new FormControl(['']),
    Vorname: new FormControl(['']),
    Email: new FormControl([''])
  });
  kundenObj: KundenModel=new KundenModel();
  constructor(config: NgbModalConfig, private modalService: NgbModal,private api: CrudService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void { }

  open(content: any) {
    this.modalService.open(content);
  }
  postDeatails()
  {
    this.kundenObj.id = this.formvalue.value.Id;
    this.kundenObj.Name = this.formvalue.value.Name;
    this.kundenObj.Vorame = this.formvalue.value.Vorame;
    this.kundenObj.Email = this.formvalue.value.Email;
    this.api.postKunden(this.kundenObj);
  }

  onSubmit() {
    console.log(this.kundenObj);
  }

}
