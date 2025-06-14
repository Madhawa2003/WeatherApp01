import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './View/Pages/main-page/main-page.component';
import { WeatherCardComponent } from './View/Components/weather-card/weather-card.component';
import { DetailPopupComponent } from './View/Components/detail-popup/detail-popup.component';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {AuthModule} from '@auth0/auth0-angular';
import { BackgroundComponent } from './View/Components/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WeatherCardComponent,
    DetailPopupComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIcon,
    MatFormField,
    MatLabel,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    AuthModule.forRoot({
      domain:"dev-2dpbnlmps4ws3vol.us.auth0.com",
      clientId:"RNvdAf9wGX9wuyBv0khYvIlm8oeo30os",
      authorizationParams:{
        redirect_uri:window.location.origin,

      },
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
