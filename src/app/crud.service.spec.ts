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
      expect(res.data.length).toBe(1);
    });
    const req = httpcontroller.expectOne('http://localhost:3000/posts');
    expect(req.request.method).toBe('GET');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(newEmployee);
    httpcontroller.verify();
  });
});
