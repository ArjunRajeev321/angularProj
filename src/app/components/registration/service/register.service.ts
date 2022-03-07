import { Injectable } from '@angular/core';
import { DemoServiceService } from '../../first/demo-component/service/demo-service.service';

@Injectable()
export class RegisterService {

  constructor(private http:DemoServiceService) { }

  public path : string = 'http://localhost:8086/';

  saveData(data:any){
    return this.http.post(this.path+'users/newUsers',data);
  }

}
