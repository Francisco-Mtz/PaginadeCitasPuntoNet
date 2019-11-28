import { Injectable, Inject } from "@angular/core"; //Este es un servicio grobal y lo utilizare para obtener la informacion de la Bd y desplegarla donde se solicite.
import { Usuario, MyResponse } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Connect-Type': 'application/json',
    'Authorizacion':'my-ath-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public algo: string = "Hola mundooooo";
  baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public GetRegistro(): Observable<Usuario[]> {   //Desde este metodo hacemos la solicitud

    return this.http.get<Usuario[]>(this.baseUrl + "api/Register/Usuario");
  }

  public Add(sexo, contrasena, preferenciaSexual, email, foto, direccionNumero, direccionCalle, nombrePila, apellidoPaterno, apellidoMaterno, claveEstado, claveMunicipio, claveColonia) {
    this.http.post<MyResponse>(this.baseUrl + 'api/Register/Add',
      {
        'sexo': sexo, 'contrasena': contrasena, 'preferenciaSexual': preferenciaSexual, 'email': email, 'foto': foto, 'direccionNumero': direccionNumero, 'direccionCalle': direccionCalle,
        'nombrePila': nombrePila, 'apellidoPaterno': apellidoPaterno, 'apellidoMaterno': apellidoMaterno, 'claveEstado': claveEstado, 'claveMunicipio': claveMunicipio, 'claveColonia': claveColonia
      }, httpOptions).subscribe(
        result => {
          console.log(result);
        },
          error => console.error(error)
      );
  }

}
