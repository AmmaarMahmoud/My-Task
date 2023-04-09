import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from 'src/app/@models/deal';

@Injectable({
  providedIn: 'root'
})
export class ApiDealsService {

  constructor(private http : HttpClient) { }
  getAlltDeals():Observable<Deal[]>{
    return this.http.get<Deal[]>('https://my-json-server.typicode.com/mabukoush1/contacts/db')
  }
}
