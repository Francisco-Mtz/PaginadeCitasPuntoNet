using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoBD.Models.Response
{
    public class MyResponse
    {
        public int Success { get; set; }
        public string Menssage { get; set; }
        public object Data { get; set; }
    }
}
