import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  postKunden(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any)=>{
      return res;
      }))


  }

  updateKunden(data: any,id: any) {
    return this.http.put<any>("http://localhost:3000/posts/" + id,data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getKunden() {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteKunden(id: any) {
  return this.http.delete("http://localhost:3000/posts/" + id).pipe(map(
    res =>{
      return res;
    }));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
