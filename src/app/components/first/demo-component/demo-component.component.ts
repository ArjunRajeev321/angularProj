import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomServiceService } from '../../../../../src/app/services/custom-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponentComponent } from '../../dialogComponent/popup-component/popup-component.component';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','delete','update'];

  dataSource : any = new MatTableDataSource();

  isAvailable : boolean = false;

  constructor(private fb : FormBuilder,private myService:CustomServiceService,private dialog:MatDialog) { }

  ngOnInit() {
    this.onload();
  }
  

  
  // profileForm = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName : new FormControl('')
  // })

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // profileForm = this.fb.group({
  //   firstName: [''],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   })
  // });

  profileForm = this.fb.group({
    firstName: ['']
  });



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    let name = this.profileForm.controls.firstName.value;
    console.log(this.profileForm.controls.firstName,name);

    this.myService.insertData(name).subscribe(resp=>{
      this.onload() ;
      console.log('ADDED Arjun!!!');
    });

  }
  
  onload() {
    // TODO: Use EventEmitter with form value
    this.myService.getData().subscribe(resp=>{
      this.dataSource = resp;
      if(this.dataSource.length > 0){
        this.isAvailable = true;
      }else{
      }
    });
  }

  deleteData(id:any) {
    // TODO: Use EventEmitter with form value
    this.myService.deleteData(id).subscribe(resp=>{
      this.dataSource = resp;
    });
  }
  temp1 :string = '';
  temp2 :string = '';
  openDialog(element:any):void{
    const dialogRef = this.dialog.open(PopupComponentComponent,{
      height : '400px',
      width :'400px',      
      data : {id:element.id,name:element.name}
    })
    console.log('check');

  }

  updateData(id:any,name:any) {
    // TODO: Use EventEmitter with form value
    this.myService.updateData(id,name).subscribe(resp=>{
      this.dataSource = resp;
    });
  }

}
