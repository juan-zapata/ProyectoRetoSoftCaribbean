import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  cliente: Cliente[] = [];
  constructor(
    private clienteService: ClienteService, 
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.lista().subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number){
   this.clienteService.delete(id).subscribe(
     data => {
      this.toastr.success('el cliente ha sido eliminado', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.cargarClientes();
     },
     err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
     }
   )
  }

}
