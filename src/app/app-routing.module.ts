import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './View/Pages/main-page/main-page.component';
import {WeatherCardComponent} from './View/Components/weather-card/weather-card.component';
import {DetailPopupComponent} from './View/Components/detail-popup/detail-popup.component';
import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'main', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: "", redirectTo: 'main', pathMatch: 'full'},
  {path: "card", component: WeatherCardComponent},
  {path: "detail", component: DetailPopupComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
