import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, routedComponents } from "./home-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../common/shared.module";


@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
