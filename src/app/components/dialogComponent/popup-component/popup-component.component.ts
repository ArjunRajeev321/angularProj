import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomServiceService } from '../../../../../src/app/services/custom-service.service';
import { DemoComponentComponent } from '../../first/demo-component/demo-component.component';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css'],
})
export class PopupComponentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopupComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lookup:CustomServiceService, private route:Router
  ) {}

  ngOnInit() {
    console.log('HELLLLLO', this.data.id);
  }

  updateMe(id:any,name:any) {
    this.lookup.updateData(id,name).subscribe(resp=>{
      // window.location.reload();
    });
    this.route.navigate(['/check']);
  }

  onCancel(){

  }
}
