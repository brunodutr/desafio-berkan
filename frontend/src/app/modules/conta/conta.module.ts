import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContaFormularioComponent } from './components/conta-formulario/conta-formulario.component';
import { ContaRoutingModule } from './conta-routing.module';
import { ContaComponent } from './pages/conta/conta.component';



@NgModule({
  declarations: [
    ContaComponent,
    ContaFormularioComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContaModule { }
