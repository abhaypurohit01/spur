import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./common/shared.module";
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path:'login', component: LoginComponent}
];





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    CommonModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    ToastrModule.forRoot({
			timeOut: 10000,
			// positionClass: 'toast-top-full-width',
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
		}),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
