import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from 'src/app/produto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit  {

  produto: Produto = { id:0, nome: ''};

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
 
  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.getProduto(id).subscribe({
      next: p => this.produto = p,
      error: err => console.error(err)
    });
  }

  salvar(): void { 
    this.produtoService.putProduto(this.produto).subscribe({
      next: () => this.router.navigate(['/produto']),
      error: err => console.error(err)
    });
  }

}
