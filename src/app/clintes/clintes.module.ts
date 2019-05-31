import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientesService} from './clientes.service';
import { AltaclienteComponent } from './altacliente/altacliente.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
//import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@NgModule({
  declarations: [AltaclienteComponent, ListadoClientesComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ], providers: [ClientesService], exports:[AltaclienteComponent, ListadoClientesComponent]
})
export class ClintesModule { }
