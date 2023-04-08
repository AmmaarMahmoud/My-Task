import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLink = 'Authenticate/';

  constructor(
    private ApiSvc: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  signup() {
    
  }

  login() {
    
  }


  authenticate(): boolean {
    return false;
  }


  logout() {
  }


}
