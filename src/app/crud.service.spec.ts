import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CrudService', () => {
  let service: CrudService;
  let httpcontroller: HttpTestingController;

  const newEmployee = {
    id :'44',
    Name: 'Alex',
    Vorname : 'test',
    Email : 'test@gmail.com'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CrudService);
    httpcontroller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post a new employee', () => {

    service.postKunden(newEmployee).subscribe((data) => {
      expect(data).toEqual(newEmployee);
    });
    const httpreq = httpcontroller.expectOne({
      method: 'POST',
      url: 'http://localhost:3000/posts'
    });
    httpreq.flush(newEmployee);
  })
  it('should make a GET HTTP request and return all data items', () => {
    service.getKunden().subscribe(res => {
      expect(res).toEqual(newEmployee);
    });
    const req = httpcontroller.expectOne('http://localhost:3000/posts');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newEmployee);
    httpcontroller.verify();
  });

  it('should update data',  () => {
    const updatedemployee = {
      id :'44',
      Name: 'Alex',
      Vorname : 'passed',
      Email : 'test@gmail.com'
    }
    service.updateKunden(updatedemployee,updatedemployee.id).subscribe( res => {
      expect(res).toEqual(updatedemployee);
      });
    const req = httpcontroller.expectOne('http://localhost:3000/posts/' + updatedemployee.id);
    expect(req.request.method).toBe('PUT');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(updatedemployee);
    httpcontroller.verify();
  });
  it('should delete by ID',  () => {
    service.deleteKunden(newEmployee.id).subscribe(res=>{
      expect(res).toEqual(newEmployee);
    })
    const req = httpcontroller.expectOne('http://localhost:3000/posts/' + newEmployee.id);
    expect(req.request.method).toBe('DELETE');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newEmployee);
    httpcontroller.verify();


  });
});
