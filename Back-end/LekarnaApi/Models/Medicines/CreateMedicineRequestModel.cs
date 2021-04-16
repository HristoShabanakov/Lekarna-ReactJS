namespace LekarnaApi.Features.Medicines.Models
{
    using LekarnaApi.Data.Models;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class CreateMedicineRequestModel
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public string Price { get; set; }

        public string Quantity { get; set; }
    }
}
