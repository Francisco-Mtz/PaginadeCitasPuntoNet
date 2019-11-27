import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public lstUsuarios: string[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string) { //La ruta api/Registe/Usuario viene de RegisterControlle para acceder al select de usuarios
    http.get<Usuario[]>(baseUrl + "api/Register/Usuario").subscribe(result => {
      this.lstUsuarios = result;
    }, error => console.error(error));
 
  }
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
