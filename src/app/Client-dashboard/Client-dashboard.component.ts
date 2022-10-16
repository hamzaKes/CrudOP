import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import { UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ClientModel} from "../Client-Model";
import {CrudService} from "../crud.service";


@Component({
  selector: 'app-Client-dashboard',
  templateUrl: './Client-dashboard.component.html',
  styleUrls: ['./Client-dashboard.component.css'],
})
export class ClientDashboardComponent implements OnInit {

  formvalue: UntypedFormGroup = new UntypedFormGroup({
    Id: new UntypedFormControl(['']),
    Name: new UntypedFormControl(['']),
    Vorname: new UntypedFormControl(['']),
    Email: new UntypedFormControl([''])
  });
  ClientObj: ClientModel=new ClientModel();
  ClientDaten:any;
  EditObj:boolean = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal,private api: CrudService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

//Wenn die App zum ersten Mal initialisiert wird, werden alle Clientdetails mit getDetail geladen
  ngOnInit(): void
  {
    this.getDetails();
  }

  //Wenn auf "Client Hinzufügen" geklickt wird, sollte das Hinzufügen-Formular angezeigt werden
  reset() {
    this.EditObj = false;
    this.formvalue.reset();
  }

  //Details eines neuen Client in die über das Formular angegebene Datenbank eingeben
  postDeatails()
  {

    this.ClientObj.id = this.formvalue.value.Id;
    this.ClientObj.Name = this.formvalue.value.Name;
    this.ClientObj.Vorname = this.formvalue.value.Vorname;
    this.ClientObj.Email = this.formvalue.value.Email;
    this.api.postClient(this.ClientObj).subscribe(
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

  //alle gespeicherte Client Daten die in die Datenbank aufladen
  getDetails()
  {
    this.api.getClient().subscribe(
      res=>{
        this.ClientDaten = res;
      })
  }

  //UPDATE Formular aufladen mit die bereits gespeichert Client Daten aufladen
  onEditClick(row: any)
  {

    this.EditObj=true;
    this.formvalue.controls['Id'].setValue(row.id);
    this.formvalue.controls['Name'].setValue(row.Name);
    this.formvalue.controls['Vorname'].setValue(row.Vorname);
    this.formvalue.controls['Email'].setValue(row.Email);
    this.ClientObj.id = row.id;

  }

  //Bereits gespeicherte Client Daten aktualisieren/ändern
  updateDetails()
  {
    this.ClientObj.id = this.formvalue.value.Id;
    this.ClientObj.Name = this.formvalue.value.Name;
    this.ClientObj.Vorname = this.formvalue.value.Vorname;
    this.ClientObj.Email = this.formvalue.value.Email;

    this.api.updateClient(this.ClientObj,this.ClientObj.id).subscribe(
      res=>{
        alert("update successful");
        this.getDetails();
      },
      error => {
      alert("failed");
  })

  }


  //Client mit die gegeben id entfernen
  deletDetail(id:any){
    this.api.deleteClient(id).subscribe(
      res=>{
        alert("Client deleted");
        this.getDetails();
      })
  }

  onSubmit() {
    console.log(this.ClientObj);
  }

}
