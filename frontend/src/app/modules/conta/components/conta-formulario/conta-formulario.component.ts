import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormOptions } from '../../enums/form-options.enum';
import { Conta } from '../../models/conta.model';

@Component({
  selector: 'berkan-conta-formulario',
  templateUrl: './conta-formulario.component.html',
  styleUrls: ['./conta-formulario.component.scss'],
})
export class ContaFormularioComponent implements OnInit, OnChanges {
  @Input()
  form: FormOptions = FormOptions.ADD;

  @Input()
  id: String | undefined;

  @Input()
  conta: Conta = new Conta();

  _conta: Conta = new Conta();

  @Output()
  action = new EventEmitter<Conta>();

  formOptions = FormOptions;

  contaFormGroup: FormGroup;
  disabled: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contaFormGroup = this.formBuilder.group({
      codigo: new FormControl({ value: '', disabled: true }),
      tipo_conta: new FormControl('', [Validators.required]),
      titular: new FormControl('', [Validators.required]),
      saldo: new FormControl(0, [Validators.required]),
      limite_emprestimo: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this._conta = Object.assign({}, this.conta);
    this.contaFormGroup.patchValue(this._conta);

    let tipoContaCtrl = this.contaFormGroup.get('tipo_conta');

    if (tipoContaCtrl?.value === 'POUPANCA') {
      this.contaFormGroup.get('limite_emprestimo')?.disable();
    }

    if (this.form !== FormOptions.ADD) {
      tipoContaCtrl?.disable();
    }

    if (this.form === FormOptions.DELETE) {
      for (let control in this.contaFormGroup.controls) {
        this.contaFormGroup.controls[control].disable();
        this.disabled = true;
      }
    }
  }

  ngOnChanges() {
    this._conta = Object.assign({}, this.conta);
    this.contaFormGroup.patchValue(this._conta);
  }

  verificarLimiteEmprestimo() {
    if (this._conta.tipo_conta == 'POUPANCA') {
      this._conta.limite_emprestimo = 0;
    }
  }

  emitEvent() {
    if (this.contaFormGroup.valid || this.disabled) {
      this.action.emit(this.contaFormGroup.getRawValue());
    }
  }
}
