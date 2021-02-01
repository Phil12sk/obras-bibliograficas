import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { LastNameList } from './core/lists/last-name-list';
import { PrepositionNameList } from './core/lists/preposition-list';
import { NameValidatorsService } from './core/name-validator';

@NgModule({
  declarations: [
    AppComponent,
    AutoresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    LastNameList,
    PrepositionNameList,
    NameValidatorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
