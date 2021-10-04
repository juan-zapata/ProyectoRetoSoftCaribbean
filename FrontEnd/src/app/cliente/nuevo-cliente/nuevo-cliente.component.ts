import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

    cus_nmcliente: number = 0;
    cus_dsnombres: string = '';
    cus_dsapellidos:  string = '';
    cus_dsdireccion:  string = '';
    cus_dscorreo:  string = '';
    cus_cdtelefono:  string = '';
    cus_cdtelefonoalter:  string = '';
    cus_cdcelular:  string = '';
    cus_nmcargo: number = 0;
    cus_dscargo:  string = '';
    cus_nmciudad: number = 0;
    cus_dsciudad:  string = '';
    cus_fenacimiento: string = '';
    cus_genero:  string = '';
    cus_nmcomunidad: number = 0;
    cus_dscomunidad:  string = '';
    cus_dsempresalabora:  string = '';
    cus_nmdivision: number = 0;
    cus_dsdivision:  string = '';
    cus_nmpais: number = 0;
    cus_dspais:  string = '';
    cus_hobbies:  string = '';
    cus_febaja: string = '';
    cus_feregistro: string = '';
  

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const cliente = new Cliente(this.cus_nmcliente,this.cus_dsnombres,this.cus_dsapellidos,this.cus_dsdireccion,this.cus_dscorreo,this.cus_cdtelefono,this.cus_cdtelefonoalter,this.cus_cdcelular,this.cus_nmcargo,this.cus_dscargo,this.cus_nmciudad,this.cus_dsciudad,this.cus_fenacimiento,this.cus_genero,this.cus_nmcomunidad,this.cus_dscomunidad,this.cus_dsempresalabora,this.cus_nmdivision, this.cus_dsdivision,this.cus_nmpais,this.cus_dspais,this.cus_hobbies,this.cus_febaja,this.cus_feregistro)
    this.clienteService.save(cliente).subscribe(
      data =>{
        this.toastr.success('el cliente ha sido creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    )
  }

}
