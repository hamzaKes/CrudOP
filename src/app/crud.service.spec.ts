import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('CrudService', () => {
  let service: CrudService;
  let httpcontroller: HttpTestingController;
  let url='http://localhost:3000';
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(CrudService);
    httpcontroller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post a new employee', () => {
    const newEmployee = {
      id :'44',
      Name: 'Alex',
      Vorname : 'test',
      Email : 'test@gmail.com'
    };
    service.postKunden(newEmployee).subscribe((data) => {
      expect(data).toEqual(newEmployee);
    });
    const httpreq = httpcontroller.expectOne({
      method: 'post',
      url: '{url}/posts'
    });
    httpreq.flush(newEmployee);
  })
});
