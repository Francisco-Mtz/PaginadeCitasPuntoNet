import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      apellidoP: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      apellidoM: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      preferenciasex: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      sexo: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
      contrasenia: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      calle: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      numero: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      municipio: new FormControl('', [Validators.required]),
      colonia: new FormControl('', [Validators.required]),
    });
  }

  formRegistro: FormGroup;

  constructor() {
    this.formRegistro = this.createFormGroup();
  }

  onSaveRegister(datos) {
    if (this.formRegistro.valid) {
      /*Guardar en la BD*/
      this.formRegistro.reset();
      console.log(datos);
      console.log("Valido");
    } else console.log("Invalido");

  }

  get nombre() { return this.formRegistro.get('nombre'); }
  get apellidoP() { return this.formRegistro.get('apellidoP'); }
  get apellidoM() { return this.formRegistro.get('apellidoM'); }
  get preferenciasex() { return this.formRegistro.get('preferenciasex'); }
  get sexo() { return this.formRegistro.get('sexo'); }
  get email() { return this.formRegistro.get('email'); }
  get contrasenia() { return this.formRegistro.get('contrasenia'); }
  get calle() { return this.formRegistro.get('calle'); }
  get numero() { return this.formRegistro.get('numero'); }
  get estado() { return this.formRegistro.get('estado'); }
  get municipio() { return this.formRegistro.get('municipio'); }
  get colonia() { return this.formRegistro.get('colonia'); }

  public Estados;
  public Municipios;
  public Colonias;
  async ngOnInit() {
    this.Estados = [
      {
        nombre: "Nuevo Leon",
        id: 1,
      },
      {
        nombre: "Guadalajara",
        id: 2,
      },
      {
        nombre: "Veracruz",
        id: 3,
      },
      {
        nombre: "Guerrero",
        id: 4,
      },
      {
        nombre: "Estado de Mexico",
        id: 5,
      }];

    this.Municipios = [
      {
        nombre: "Municipio 1",
        id: 1,
      },
      {
        nombre: "Municipio 2",
        id: 2,
      },
      {
        nombre: "Municipio 3",
        id: 3,
      },
      {
        nombre: "Municipio 4",
        id: 4,
      },
      {
        nombre: "Municipio 5",
        id: 5,
      }];

    this.Colonias = [
      {
        nombre: "Colonia 1",
        id: 1,
      },
      {
        nombre: "Colonia 2",
        id: 2,
      },
      {
        nombre: "Colonia 3",
        id: 3,
      },
      {
        nombre: "Colonia 4",
        id: 4,
      },
      {
        nombre: "Colonia 5",
        id: 5,
      }];
  }


}
