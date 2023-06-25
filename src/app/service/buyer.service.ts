import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { buyer } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(public http:HttpClient) { }

  //api calls

  //--------------------[ .Net api ]--------------------------

  // baseurl = "http://localhost:59068/"

  // GetBuyeresList(){ 
  //   var url = this.baseurl + 'api/buyerlist'
  //   return this.http.get(url).subscribe(data=> {
  //     return data;
  //   });
  // }

  // verifyuser(username: string):Observable<any>{
  //   var url = this.baseurl + 'api/verifylogin';
  //   return this.http.get(url, { params: { username}});
  // }

  // createBuyer(buyerData: any): Observable<any> {
  //   var url = this.baseurl + 'api/createbuyer';
  //   return this.http.post<any>(url, buyerData);
  // }

  //--------------------------------------------------------------


  GetItemsList(){ }
  updatebuyer(b:buyer){
    
  }

     //--------------------[ spring boot api ]--------------------------

  baseurl = "http://localhost:8080/"

  GetBuyeresList(){ 
    var url = this.baseurl + 'GetBuyersList'
    return this.http.get(url).subscribe(data=> {
      return data;
    });
  }

  verifyuser(username: string):Observable<any>{
    var url = this.baseurl + 'verifylogin';
    return this.http.get(url, { params: { username}});
  }

  createBuyer(buyerData: any): Observable<any> {
      var url = this.baseurl + 'createbuyer';
      return this.http.post<any>(url, buyerData);
    }

  //-----------------------------------------------------------------

  
}
