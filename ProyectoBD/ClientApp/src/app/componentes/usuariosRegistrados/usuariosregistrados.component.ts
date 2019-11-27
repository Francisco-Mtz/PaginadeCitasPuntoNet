import { Component, Input } from '@angular/core';  

@Component({
  selector: 'app-usuariosregistrados',
  templateUrl: './usuariosregistrados.component.html',
  styleUrls: ['./usuariosregistrados.component.css']
})
export class UsuariosRegistradosComponent {
  @Input() oUsuario: Usuario;
}

interface Usuario {
  Id: number,
  sexo: string,
  contrasena: string,
  preferenciaSexual: string,
  email: string,
  foto: string,
  direccionNumero: number,
  direccionCalle: string,
  nombrePila: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  claveEstado: string,
  claveMunicipio: number,
  claveColonia: number,
}
