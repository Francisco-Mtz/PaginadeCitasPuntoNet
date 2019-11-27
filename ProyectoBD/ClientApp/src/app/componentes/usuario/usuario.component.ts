import { Component, Input } from '@angular/core';  /*Utilizamos input para poder recibir datos de otra parte en mi componente*/

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
  @Input() texto: string;

  
}
