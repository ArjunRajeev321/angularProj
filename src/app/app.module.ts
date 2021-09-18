import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './components/first/demo-component/demo-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DemoServiceService } from './components/first/demo-component/service/demo-service.service';
import { FormsModule } from '@angular/forms'
import { CustomServiceService } from './services/custom-service.service';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponentComponent } from './components/dialogComponent/popup-component/popup-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    PopupComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [DemoServiceService,CustomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
