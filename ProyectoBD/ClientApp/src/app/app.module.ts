import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CitarComponent } from './citar/citar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { UsuariosRegistradosComponent } from './componentes/usuariosRegistrados/usuariosregistrados.component';

import { RegistroService } from './service/registro.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CitarComponent,
    RegistroComponent,
    UsuarioComponent,
    UsuariosRegistradosComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: RegisterComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'citar', component: CitarComponent },
    ])
  ],
  providers: [RegistroService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
