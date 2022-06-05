import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import { UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {KundenModel} from "../Kunden-Model";
import {CrudService} from "../crud.service";

@Component({
  selector: 'app-kunden-dashboard',
  templateUrl: './kunden-dashboard.component.html',
  styleUrls: ['./kunden-dashboard.component.css'],
})
export class KundenDashboardComponent implements OnInit {

  formvalue: UntypedFormGroup = new UntypedFormGroup({
    Id: new UntypedFormControl(['']),
    Name: new UntypedFormControl(['']),
    Vorname: new UntypedFormControl(['']),
    Email: new UntypedFormControl([''])
  });
  kundenObj: KundenModel=new KundenModel();
  KundenDaten:any;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private api: CrudService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void
  {
    this.getDetails();
  }

  open(content: any) {
    this.modalService.open(content);
  }
  postDeatails()
  {
    this.kundenObj.id = this.formvalue.value.Id;
    this.kundenObj.Name = this.formvalue.value.Name;
    this.kundenObj.Vorname = this.formvalue.value.Vorname;
    this.kundenObj.Email = this.formvalue.value.Email;
    this.api.postKunden(this.kundenObj).subscribe(
      res =>{
        console.log(res);
        alert("added successfully");
        this.formvalue.reset();
        this.getDetails();
      },
      err =>{
        alert("failure");
      });
  }

  getDetails()
  {
    this.api.getKunden().subscribe(
      res=>{
        this.KundenDaten = res;
      }
    )
  }

  onSubmit() {
    console.log(this.kundenObj);
  }

}
