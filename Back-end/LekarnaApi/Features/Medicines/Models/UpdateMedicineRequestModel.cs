namespace LekarnaApi.Features.Medicines.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    public class UpdateMedicineRequestModel
    {
        public string Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        
        public string Price { get; set; }

        public string Quantity { get; set; }
    }
}
