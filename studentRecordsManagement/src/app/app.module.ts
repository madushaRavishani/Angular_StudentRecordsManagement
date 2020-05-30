import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [

{ path: '', component: ViewComponent, pathMatch: 'full' },
{ path: 'view', component: ViewComponent },
{ path: 'add', component: AddComponent },
{ path: 'edit/:id', component: EditComponent }
];


@NgModule({ 
  declarations: [ 
    AppComponent, AddComponent, ViewComponent, EditComponent 
   
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
