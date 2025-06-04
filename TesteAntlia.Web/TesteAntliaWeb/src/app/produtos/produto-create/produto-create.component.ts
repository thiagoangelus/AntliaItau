import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from 'src/app/produto.service';
import { Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})

export class ProdutoCreateComponent {

  produto: Produto = { cod_produto:0, des_produto: '' , sta_status:''};

  constructor(private produtosService: ProdutoService, private router: Router) { }

  salvar(): void {
    this.produtosService.postProduto(this.produto).subscribe({
      next : () => this.router.navigate(['/produtos']),
      error: err => console.error(err)   
    });
  }
}
