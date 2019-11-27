using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace ProyectoBD
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
/*
            var builder = new SqlConnectionStringBuilder();
            builder.DataSource = @"DESKTOP-PH2O4KV\SQLEXPRESS";
            builder.InitialCatalog = "BuscoParejaBD";
            builder.IntegratedSecurity = true;

            var connectionString = builder.ToString();
            var Id = 2;
            var query = @"select *
                            from Persona   
                            where id = @Id";
            using (SqlConnection sql = new SqlConnection("connectionString"))
            {
                using (SqlCommand cmd = new SqlCommand("AgregarUsuario", sql))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter("@Id", Id));
                    DataTable dt = new DataTable();
                    SqlDataAdapter da = new SqlDataAdapter(cmd);
                    sql.Open();
                    da.Fill(dt);
                }
                sql.Close();
            } */

        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
