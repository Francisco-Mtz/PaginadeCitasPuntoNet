
export interface Usuario {
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

export interface MyResponse {
  Success: number,
  Menssage: any,
  Data: string,
}
