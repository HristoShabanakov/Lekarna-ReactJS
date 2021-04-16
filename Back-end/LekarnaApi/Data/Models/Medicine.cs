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
        public Medicine()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public string Price { get; set; }

        public string Quantity { get; set; }

        public string PharmacyId { get; set; }

        public Pharmacy Pharmacy { get; set; }
    }
}
