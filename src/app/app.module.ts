import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ApiService } from './service/api.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateteamComponent } from './updateteam/updateteam.component';
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AddComponent } from './add/add.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    UpdateteamComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // NativeScriptFormsModule,
    // NativeScriptModule ,
    ReactiveFormsModule ,
    BrowserAnimationsModule ,
    // ToastrModule.forRoot(),
    StickyNavModule 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
