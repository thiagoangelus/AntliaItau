import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from 'src/app/produto.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos : Produto[] = [];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }

  carregarProdutos() : void{
    this.produtoService.getProdutos().subscribe({
      next: data => this.produtos = data,
      error: err => console.error(err) 
    });
  }

  deletar(id : number): void{
    if(confirm("Tem certeza que deseja excluir?")){ 
      this.produtoService.deleteProduto(id).subscribe({
        next : () => this.produtoService.getProdutos(),
        error : err => console.error(err)
      });
 
    }
 
  }

  editar(id : number): void{
    this.router.navigate(['produtos/editar', id]);
  }
  criar() : void{
    this.router.navigate(['produtos/criar'])
  }
}
