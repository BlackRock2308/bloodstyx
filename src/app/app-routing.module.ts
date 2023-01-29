import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HomePage/components/home/home.component';
import { StepsComponent } from './HomePage/components/steps/steps.component';

const routes: Routes = [
  { 
    path:  '', pathMatch: 'full', component:  HomeComponent
  },
  {
    path : '', component : HomeComponent
  },
  {
    path : 'steps' , component : StepsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      scrollPositionRestoration: "enabled",  anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
