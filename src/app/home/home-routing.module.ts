import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: "enabled",
    anchorScrolling: "enabled",
    preloadingStrategy: PreloadAllModules  }
    )],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

export const routedComponents = [
  HomeComponent,
  DashboardComponent
];
