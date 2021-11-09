import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DetailsComponent } from './tutorial/details/details.component';
import { AddComponent } from './tutorial/add/add.component';
import { EditComponent } from './tutorial/edit/edit.component';
import { SearchComponent } from './forms/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    DetailsComponent,
    AddComponent,
    EditComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
