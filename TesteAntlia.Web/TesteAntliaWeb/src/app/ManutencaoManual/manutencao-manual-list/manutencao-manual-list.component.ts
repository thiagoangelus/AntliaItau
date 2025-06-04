import { Component, OnInit } from '@angular/core';
import { ManutencaoManualService, ManutencaoManual } from 'src/app/manutencaoManual.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-manual-list',
  templateUrl: './manutencao-manual-list.component.html',
  styleUrls: ['./manutencao-manual-list.component.css']
})
export class ManutencaoManualListComponent implements OnInit {

 manutencoes : ManutencaoManual[] = [];

  constructor(private ManutencaoManualService: ManutencaoManualService, private router: Router) { }

  ngOnInit(): void {
  }

  carregarManutencaoManuals() : void{
    this.ManutencaoManualService.getManutencaoManuals().subscribe({
      next: data => this.manutencoes = data,
      error: err => console.error(err) 
    });
  }

  deletar(id : number): void{
    if(confirm("Tem certeza que deseja excluir?")){ 
      this.ManutencaoManualService.deleteManutencaoManual(id).subscribe({
        next : () => this.ManutencaoManualService.getManutencaoManuals(),
        error : err => console.error(err)
      });
 
    }
 
  }

  editar(id : number): void{
    this.router.navigate(['manutencaoManual/editar', id]);
  }
  criar() : void{
    this.router.navigate(['manutencaoManual/criar'])
  }
}
