import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DcComponent } from './dc/dc.component';


const routes: Routes = [

    { path: '', pathMatch: 'full', component: ChicagoComponent },
    { path: 'Chicago', component: ChicagoComponent },
    { path: 'Burbank', component: BurbankComponent },    
    { path: 'Seattle', component: SeattleComponent },
    { path: 'SanJose', component: SanjoseComponent },
    { path: 'Dallas', component: DallasComponent },
    { path: 'DC', component: DcComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
