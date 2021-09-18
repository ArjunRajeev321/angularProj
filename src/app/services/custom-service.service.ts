import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemoServiceService } from '../components/first/demo-component/service/demo-service.service';

@Injectable()
export class CustomServiceService {

  constructor(private http:DemoServiceService) { }

  public insertData(name :any){
    let hostName = 'http://localhost:8086/';
    return this.http.post(hostName +'hello/world/'+name);
  }


  public deleteData(id :any){
    let hostName = 'http://localhost:8086/';
    return this.http.post(hostName +'hello/delete/'+id);
  }

  public getData(){
    let hostName = 'http://localhost:8086/';
    return this.http.get(hostName +'hello/getAllResult/');
  }

  public updateData(id :any,name:any){
    let hostName = 'http://localhost:8086/';
    return this.http.post(hostName +'hello/update/'+id+'/'+name);
  }

  
}
