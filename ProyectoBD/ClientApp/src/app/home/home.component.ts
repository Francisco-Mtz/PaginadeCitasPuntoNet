import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroService } from '../service/registro.service';
import { Usuario } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public lstUsuarios: Observable<Usuario[]>;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    protected registroService: RegistroService
  ) {
    this.GetRegistros();
  }

  public GetRegistros() {  //Este metodo trae la informacion de un metodo de los servicios
    this.lstUsuarios = this.registroService.GetRegistro();
  }
}

