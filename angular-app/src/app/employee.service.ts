import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  url = 'http://localhost:3000/emp/'

  constructor(private http: HttpClient) {}

  getEmployees() {

    return this.http.get(this.url)

  }
}

         