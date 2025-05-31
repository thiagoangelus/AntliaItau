import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './produtos/produto-create/produto-create.component';
import { ProdutoEditComponent } from './produtos/produto-edit/produto-edit.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoListComponent},
  { path: 'produtos/criar', component: ProdutoCreateComponent},
  { path: 'Produtos/editar/:id', component: ProdutoEditComponent},
  { path: '', redirectTo: 'produtos', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
