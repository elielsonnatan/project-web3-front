import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRegisterComponent } from './components/create-register/create-register.component';
import { ListRegistersComponent } from './components/list-registers/list-registers.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRegisterComponent,
    ListRegistersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
