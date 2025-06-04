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
 
  items: any[] = [];
  dropdownOptions: any[] = [];
  selectedOption: number = 0; 

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
          this.ManutencaoManualsService.getDropdownOptions().subscribe(data => {
          
          this.dropdownOptions = data; 
        });

        this.ManutencaoManualsService.getItems().subscribe(data => {
       
          this.items = data;
        });   
      }
  
  salvar(): void {
    console.log(this.selectedOption.toString());
    this.manutencaoManual.cod_produto = this.selectedOption.toString().trim(); 
    this.ManutencaoManualsService.postManutencaoManual(this.manutencaoManual).subscribe({ 
      next : () => this.router.navigate(['/manutencaoManual']),
      error: err => console.error(err)   
    });
  }
}

 