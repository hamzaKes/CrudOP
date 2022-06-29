import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {}

  //HTTP POST methode auf die JSON Datenbank anwenden
  postKunden(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
      }))
  }
  //HTTP UPDATE methode auf die JSON Datenbank anwenden(Id ist nodwendig)
  updateKunden(data: any,id: any) {
    return this.http.put<any>("http://localhost:3000/posts/" + id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //HTTP GET methode auf die JSON Datenbank anwenden
  getKunden() {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  //HTTP DELETE methode auf die JSON Datenbank anwenden(ID notwendig)
  deleteKunden(id: any) {
  return this.http.delete("http://localhost:3000/posts/" + id).pipe(map(
    res =>{
      return res;
    }));
  }

}
