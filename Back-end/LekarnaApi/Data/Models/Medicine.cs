namespace LekarnaApi.Data.Models
{
    using LekarnaApi.Data.Models.Base;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Threading.Tasks;
    public class Medicine : DeletableEntity
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
