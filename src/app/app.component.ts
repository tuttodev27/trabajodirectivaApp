import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios'
  mensaje="";
  registrado= false
  nombre: string="";
  apellido: string="";
  entradas: any[];
  cargo:string="";
  constructor(){
    this.entradas=[
      {titulo:"Python cada día mas presente"},
      {titulo:"Java presente hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"}
    ]
  }
registrarUsuario(){
  this.registrado= true

  this.mensaje="usuario registrado con exito"

}

}
