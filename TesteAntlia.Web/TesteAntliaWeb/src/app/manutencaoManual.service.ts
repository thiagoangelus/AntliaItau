import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

export interface ManutencaoManual{ 
        dat_mes: number,  
        dat_ano: number,  
        num_lancamento: number   
        cod_produto: string,  
        cod_cosif: string,  
        des_descricao: string,  
        dat_Movimento: Date,  
        cod_usuario: string,  
        val_valor: number  
}

@Injectable({
    providedIn: 'root'
})

export class ManutencaoManualService {
    
    private apiUrl = 'https://localhost:7275/api/MovimentoManual/movimento-manual';

    private apiUrlProduto = "https://localhost:7275/api/Produto/produto"

    constructor(private  http : HttpClient){}

    getDropdownOptions(): Observable<any[]> {
         return this.http.get<any[]>(`${this.apiUrlProduto}`);
    }
    getItems(): Observable<any[]> {
         return this.http.get<any[]>(`${this.apiUrlProduto}`);
    }

    getManutencaoManuals(): Observable<ManutencaoManual[]>{
        return this.http.get<ManutencaoManual[]>(this.apiUrl);
    }
    getManutencaoManual(id : number):Observable<ManutencaoManual>{
        return this.http.get<ManutencaoManual>(this.apiUrl + '$/{id}');
    }
    postManutencaoManual(ManutencaoManual : ManutencaoManual): Observable<ManutencaoManual>{
        return this.http.post<ManutencaoManual>(this.apiUrl, ManutencaoManual);
    }
    putManutencaoManual(ManutencaoManual : ManutencaoManual): Observable<void>{
        return this.http.put<void>(this.apiUrl + '$/{ManutencaoManual.Id}', ManutencaoManual);
    }
    deleteManutencaoManual(id : number): Observable<void>{
        return this.http.delete<void>(this.apiUrl + '&/{Id}')
    }
}

