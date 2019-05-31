import { Injectable } from '@angular/core';
import {Cliente, Grupo} from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes:Cliente[];
  private grupos:Grupo[];
  private icon=[];
  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
    this.icon=[
      'fa-address-book',
      'fa-quora',
      'fa-snowflake-o',
      'fa-grav',
      'fa-window-close-o',
      'fa-bath',
      'fa-shower', 
      'fa-microchip',
      'fa-microchip',
    'fa-envelope-open'
    ];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      App: '',
      Apm: '',
      sexo: '',
      edad: 0,
      correo: '',
      icono: this.icon[Math.floor((Math.random()*10)+1)]
    };
  }
   
}
