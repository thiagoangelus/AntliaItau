import { Component, OnInit } from '@angular/core';
import { ManutencaoManualService, ManutencaoManual } from 'src/app/manutencaoManual.service';
import { Route, Router } from '@angular/router';
import { Console, error } from 'console';

@Component({
  selector: 'app-manutencao-manual-create',
  templateUrl: './manutencao-manual-create.component.html',
  styleUrls: ['./manutencao-manual-create.component.css']
})
export class ManutencaoManualCreateComponent  implements OnInit {
 
  itemsProduto: any[] = [];
  dropdownOptionsProduto: any[] = [];
  selectedOptionProduto: number = 0; 

  itemsProdutoCosif: any[] = [];
  dropdownOptionsProdutoCosif: any[] = [];
  selectedOptionProdutoCosif: number = 0; 

  isDisabled: boolean = true; 

  manutencaoManual: ManutencaoManual = {  
        dat_mes: 0,  
        dat_ano: 0,  
        num_lancamento: 0 ,  
        cod_produto: '',  
        cod_cosif: '',  
        des_descricao: '',  
        dat_Movimento: new Date(),  
        cod_usuario: 'Teste',  
        val_valor: 0   
      };

      

   constructor(private ManutencaoManualsService: ManutencaoManualService, private router: Router) { }
    
   ngOnInit(): void {
          this.ManutencaoManualsService.getDropdownOptionsProduto().subscribe(data => { 
          this.dropdownOptionsProduto = data; 
        });

        this.ManutencaoManualsService.getItems().subscribe(data => { 
          this.itemsProduto = data;
        });   
      }

       toggleInput() {
    this.isDisabled = !this.isDisabled; 
  }

  onProdutoCosifChange(cod_produto: number): void {
        this.selectedOptionProdutoCosif = cod_produto; 
        this.ManutencaoManualsService.getDropdownOptionsProdutoCosif(cod_produto).subscribe((data) => {
        this.itemsProdutoCosif = data;
    });
  }
  
  salvar(): void {
    console.log(this.selectedOptionProduto.toString());
    this.manutencaoManual.cod_produto = this.selectedOptionProduto.toString().trim(); 
    this.manutencaoManual.cod_cosif = this.selectedOptionProdutoCosif.toString().trim();
    this.ManutencaoManualsService.postManutencaoManual(this.manutencaoManual).subscribe({ 
      next : () => this.router.navigate(['/manutencaoManual']),
      error: err => console.error(err)   
    });
  }
}

 