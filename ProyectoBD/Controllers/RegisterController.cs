using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
    }
}