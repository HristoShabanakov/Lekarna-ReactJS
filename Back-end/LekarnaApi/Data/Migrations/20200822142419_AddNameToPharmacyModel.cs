using Microsoft.EntityFrameworkCore.Migrations;

namespace LekarnaApi.Data.Migrations
{
    public partial class AddNameToPharmacyModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Pharmacies",
                maxLength: 50,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Pharmacies");
        }
    }
}
