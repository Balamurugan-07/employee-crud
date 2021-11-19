import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type Payload = {
  eid: number;
  ename?: string;
  salary?: number;
};

type Response = {
  message: string;
  obj: any;
};

@Injectable({ providedIn: 'root' })
export class AppService {
  baseUrl = 'http://localhost:8081/empd';
  constructor(private http: HttpClient) {}

  deleteEmployee(eid: number): Observable<Response> {
    const payload: Payload = {
      eid: eid,
    };
    return this.http.post<Response>(this.baseUrl + '/deleteEmp', payload);
  }

  insertEmployee(payload: Payload): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + '/insertEmp', payload);
  }
  updateEmployee(payload: Payload): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + '/updateEmp', payload);
  }
  showEmployees(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + '/showAll');
  }
}
