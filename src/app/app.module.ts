import { SummeryPipe } from './pipe/summery.pipe';
import { CustomDatePipe } from './pipe/date.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    SummeryPipe,
    CustomDatePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
