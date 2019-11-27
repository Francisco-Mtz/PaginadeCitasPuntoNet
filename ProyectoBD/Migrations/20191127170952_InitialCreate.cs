using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoBD.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    sexo = table.Column<string>(nullable: true),
                    contrasena = table.Column<string>(nullable: true),
                    preferenciaSexual = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    foto = table.Column<string>(nullable: true),
                    direccionNumero = table.Column<int>(nullable: false),
                    direccionCalle = table.Column<string>(nullable: true),
                    nombrePila = table.Column<string>(nullable: true),
                    apellidoPaterno = table.Column<string>(nullable: true),
                    apellidoMaterno = table.Column<string>(nullable: true),
                    claveEstado = table.Column<int>(nullable: true),
                    claveMunicipio = table.Column<int>(nullable: true),
                    claveColonia = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
