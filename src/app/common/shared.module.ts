import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RouterModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { 
  static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule
		};
	}
}
