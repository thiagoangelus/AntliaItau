import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './produtos/produto-create/produto-create.component';
import { ProdutoEditComponent } from './produtos/produto-edit/produto-edit.component';

import { ManutencaoManualListComponent } from './ManutencaoManual/manutencao-manual-list/manutencao-manual-list.component';
import { ManutencaoManualCreateComponent } from './ManutencaoManual/manutencao-manual-create/manutencao-manual-create.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoListComponent},
  { path: 'produtos/criar', component: ProdutoCreateComponent},
  { path: 'Produtos/editar/:id', component: ProdutoEditComponent},

  {path: 'manutencaoManual', component: ManutencaoManualListComponent},
  { path: 'manutencaoManual/criar', component: ManutencaoManualCreateComponent},
  { path: '', redirectTo: 'manutencaoManual', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
