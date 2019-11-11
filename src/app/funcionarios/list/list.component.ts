import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioDataService } from '../funcionario-data.service';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  funcionarios: Observable<any>;
  constructor(private funcionarioService: FuncionarioService,
              private funcionarioDataService: FuncionarioDataService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getAll();
  }

  delete(key: string){
    this.funcionarioService.delete(key);
  }

  edit(funcionario: Funcionario, key: string){
    this.funcionarioDataService.obtemFuncionario(funcionario, key);
  }
}
