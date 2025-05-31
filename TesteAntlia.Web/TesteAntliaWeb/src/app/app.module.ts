import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './produtos/produto-create/produto-create.component';
import { ProdutoEditComponent } from './produtos/produto-edit/produto-edit.component';

@NgModule({
   
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
