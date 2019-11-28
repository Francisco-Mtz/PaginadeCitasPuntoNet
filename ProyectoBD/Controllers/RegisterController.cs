using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProyectoBD.Models.Response;
using ProyectoBD.Models.ViewModels;

namespace ProyectoBD.Controllers
{
    [Route("api/[controller]")]
    public class RegisterController : Controller
    {
        private Models.MyDBContext db;

        public RegisterController(Models.MyDBContext context)
        {
            db = context;
        }
        [HttpGet("[action]")]
        public IEnumerable<UsuarioViewModel> Usuario()       //Aqui le estoy diciendo que me regrese en dato del tipo UsuarioViewModel que defini
        {
            List<UsuarioViewModel> lst = (from d in db.Usuario
                                                 select new UsuarioViewModel
                                                 {
                                                     Id = d.Id,
                                                     sexo = d.sexo,
                                                     contrasena = d.contrasena,
                                                     preferenciaSexual = d.preferenciaSexual,
                                                     email = d.email,
                                                     foto = d.foto,
                                                     direccionNumero = d.direccionNumero,
                                                     direccionCalle = d.direccionCalle,
                                                     nombrePila = d.nombrePila,
                                                     apellidoPaterno = d.apellidoPaterno,
                                                     apellidoMaterno = d.apellidoMaterno,
                                                     claveEstado = d.claveEstado,
                                                     claveMunicipio = d.claveMunicipio,
                                                     claveColonia = d.claveColonia,
                                                 }).ToList();
            return lst;
        }

        [HttpPost("[action]")]
        public MyResponse Add([FromBody]UsuarioViewModel model)
        {
            MyResponse oR = new MyResponse();  //Respuestas

            try
            {
                Models.Usuario oUsuario = new Models.Usuario(); //Va a la tabal de la bd
                oUsuario.sexo = model.sexo;
                oUsuario.contrasena = model.contrasena;
                oUsuario.preferenciaSexual = model.preferenciaSexual;
                oUsuario.email = model.email;
                oUsuario.foto = model.foto;
                oUsuario.direccionNumero = model.direccionNumero;
                oUsuario.direccionCalle = model.direccionCalle;
                oUsuario.nombrePila = model.nombrePila;
                oUsuario.apellidoPaterno = model.apellidoPaterno;
                oUsuario.apellidoMaterno = model.apellidoMaterno;
                oUsuario.claveEstado = model.claveEstado;
                oUsuario.claveMunicipio = model.claveMunicipio;
                oUsuario.claveColonia = model.claveColonia;
                db.Usuario.Add(oUsuario);
                db.SaveChanges();   //Lo guarda en la base de datos
                oR.Success = 1;
            }
            catch(Exception ex)
            {
                oR.Success = 0;
                oR.Menssage = ex.Message;
            }
            return oR;
        }
    }
}