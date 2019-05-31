import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../clientes.service';
import { Cliente, Grupo } from '../cliente.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"


@Component({
  selector: 'app-altacliente',
  templateUrl: './altacliente.component.html',
  styleUrls: ['./altacliente.component.css']
})
export class AltaclienteComponent implements OnInit {
  cliente: Cliente;
  grupo: Grupo[];
  myform: FormGroup;

  constructor(private clientesService: ClientesService, public fb: FormBuilder) { }

  ngOnInit() {
   this.cliente=this.clientesService.nuevoCliente();
    this.myform= this.fb.group({
      nombre:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], 
      App:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      Apm:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      sexo:['',[Validators.required,Validators.pattern('[MFll]*')]],
      edad:['',[Validators.required]],
      corre:['',[Validators.required,Validators.email]]
    })
   //this.cliente= this.clientesService.nuevoCliente();
   //this.grupo= this.clientesService.getGrupos();
  }
  nuevoCliente(): void{
    this.clientesService.agregarCliente(this.cliente);
    this.cliente= this.clientesService.nuevoCliente();
  }

}
