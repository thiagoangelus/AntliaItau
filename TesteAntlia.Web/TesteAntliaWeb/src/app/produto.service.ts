import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface Produto{ 
    cod_produto: number,
    des_produto: string,
    sta_status: string;
}

@Injectable({
    providedIn: 'root'
})

export class ProdutoService {
    private apiUrl = 'https://localhost:7275/api/Produto/Produto';

    constructor(private  http : HttpClient){}

    getProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.apiUrl);
    }
    getProduto(id : number):Observable<Produto>{
        return this.http.get<Produto>(this.apiUrl + '$/{id}');
    }
    postProduto(produto : Produto): Observable<Produto>{
        return this.http.post<Produto>(this.apiUrl, produto);
    }
    putProduto(produto : Produto): Observable<void>{
        return this.http.put<void>(this.apiUrl + '$/{produto.Id}', produto);
    }
    deleteProduto(id : number): Observable<void>{
        return this.http.delete<void>(this.apiUrl + '&/{Id}')
    }
}

