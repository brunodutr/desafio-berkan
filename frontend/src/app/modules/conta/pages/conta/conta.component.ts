import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormOptions } from '../../enums/form-options.enum';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../services/conta.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss'],
})
export class ContaComponent implements OnInit {
  callback = () => {
    this.buscarTipoConta(undefined);
    $('[data-dismiss=modal]').click();
  };

  formOptions = FormOptions;

  tipoContaSelected: string = '';

  newConta: Conta = new Conta();
  contas$: Observable<Conta[]> = new Observable();

  constructor(private contaService: ContaService) {}

  ngOnInit(): void {
    this.contas$ = this.contaService.findAll();
  }

  buscarTipoConta(event: Event | undefined) {
    if (this.tipoContaSelected) {
      this.contas$ = this.contaService.findByTipoConta(this.tipoContaSelected);
    } else {
      this.contas$ = this.contaService.findAll();
    }
  }

  add(conta: Conta) {
    this.contaService.add(conta).subscribe(() => {
      this.callback();
      this.newConta = new Conta();
    });
  }

  edit(conta: Conta | undefined) {
    if (conta?.codigo) {
      this.contaService.edit(conta).subscribe(() => this.callback());
    }
  }

  delete(conta: Conta | undefined) {
    if (conta?.codigo) {
      this.contaService.delete(conta).subscribe(() => this.callback());
    }
  }
}
