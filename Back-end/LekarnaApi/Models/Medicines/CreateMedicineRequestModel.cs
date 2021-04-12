namespace LekarnaApi.Features.Medicines.Models
{
    using LekarnaApi.Data.Models;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class CreateMedicineRequestModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Column(TypeName = "decimal(5,2)")]
        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public int PharmacyId { get; set; }

        public Pharmacy Pharmacy { get; set; }
    }
}
