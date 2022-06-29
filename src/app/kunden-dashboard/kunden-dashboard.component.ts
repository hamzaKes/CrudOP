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
  EditObj:boolean = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal,private api: CrudService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

//Wenn die App zum ersten Mal initialisiert wird, werden alle Kundendetails mit getDetail geladen
  ngOnInit(): void
  {
    this.getDetails();
  }

  //Wenn auf "kunden Hinzufügen" geklickt wird, sollte das Hinzufügen-Formular angezeigt werden
  reset() {
    this.EditObj = false;
  }

  //Details eines neuen Kunden in die über das Formular angegebene Datenbank eingeben
  postDeatails()
  {
    this.kundenObj.id = this.formvalue.value.Id;
    this.kundenObj.Name = this.formvalue.value.Name;
    this.kundenObj.Vorname = this.formvalue.value.Vorname;
    this.kundenObj.Email = this.formvalue.value.Email;
    this.api.postKunden(this.kundenObj).subscribe(
      res =>{
        console.log(res);
        //nutzer benachrichten wenn die POST ist richtig ausgefürt
        alert("added successfully");
        this.formvalue.reset();
        this.getDetails();
      },
      err =>{
        //nutzer benachrigten wenn eine Fehler auftritt
        alert("failure");
      });
  }

  //alle gespeicherte kunden Daten die in die Datenbank aufladen
  getDetails()
  {
    this.api.getKunden().subscribe(
      res=>{
        this.KundenDaten = res;
      })
  }

  //UPDATE Formular aufladen mit die bereits gespeichert kunden Daten aufladen
  onEditClick(row: any)
  {
    this.EditObj=true;
    this.formvalue.controls['Id'].setValue(row.id);
    this.formvalue.controls['Name'].setValue(row.Name);
    this.formvalue.controls['Vorname'].setValue(row.Vorname);
    this.formvalue.controls['Email'].setValue(row.Email);
    this.kundenObj.id = row.id;

  }

  //Bereits gespeicherte kunden Daten aktualisieren/ändern
  updateDetails()
  {
    this.kundenObj.id = this.formvalue.value.Id;
    this.kundenObj.Name = this.formvalue.value.Name;
    this.kundenObj.Vorname = this.formvalue.value.Vorname;
    this.kundenObj.Email = this.formvalue.value.Email;

    this.api.updateKunden(this.kundenObj,this.kundenObj.id).subscribe(
      res=>{
        alert("update successful");
        this.getDetails();
      },
      error => {
      alert("failed");
  })

  }

  //kunden mit die gegeben id entfernen
  deletDetail(id:any){
    this.api.deleteKunden(id).subscribe(
      res=>{
        alert("kunden deleted");
        this.getDetails();
      })
  }

  onSubmit() {
    console.log(this.kundenObj);
  }

}
