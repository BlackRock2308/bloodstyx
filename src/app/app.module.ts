import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomePage/components/home/home.component';
import { NavbarComponent } from './HomePage/components/navbar/navbar.component';
import { FooterComponent } from './HomePage/components/footer/footer.component';
import { SliderComponent } from './HomePage/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
