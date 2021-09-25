import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckRouteComponent } from './components/checkRoute/check-route/check-route.component';
import { DemoComponentComponent } from './components/first/demo-component/demo-component.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path : 'home',
    pathMatch: 'full',
    component : HomeComponent
  },
  {
    path : 'check',
    pathMatch: 'full',
    component : CheckRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
