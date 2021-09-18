import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DemoServiceService {
  
  constructor(private http:HttpClient,private httpRequest:HttpClient) { }
  
   
  public get(url :any, options:any = null) : Observable<any> {
    if(options == null){
        options = {headers : this.buildHeaders('json',url)};
    }
    return this.http.get(url,options);
  }

  public post(url :any,options:any = null) : Observable<any> {
    if(options == null){
      options = {headers : this.buildHeaders('json',url)};
    }
    return this.http.post(url,options);
  }

  public buildHeaders(contentType='json',url='') {
    let headers = new HttpHeaders();
    if(contentType=='json'){
      headers.set('Content-Type','application/json');
    }
    return headers;
  }

  

  
}
