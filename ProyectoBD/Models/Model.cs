using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoBD.Models
{
    public class MyDBContext: DbContext
    {
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {

        }

        public DbSet<Usuario> Usuario { get; set; }
    }

    public class Usuario
    {
        public int Id { get; set; }
        public string sexo { get; set; }
        public string contrasena { get; set; }
        public string preferenciaSexual { get; set; }
        public string email { get; set; }
        public string foto { get; set; }
        public int direccionNumero { get; set; }
        public string direccionCalle { get; set; }
        public string nombrePila { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public int claveEstado { get; set; }
        public int claveMunicipio { get; set; }
        public int claveColonia { get; set; }
    }
}
