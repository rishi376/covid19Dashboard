import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getCovid19Data(){
    return this.http.get('https://api.rootnet.in/covid19-in/stats/latest');
    
  }
}
