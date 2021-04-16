namespace LekarnaApi.Data.Models
{
    using LekarnaApi.Data.Models.Base;
    using System;
    using System.ComponentModel.DataAnnotations;

    using static Validation.PharmacyValidations;
    public class Pharmacy : DeletableEntity
    {
        public Pharmacy()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }

        [Requred]
        [MaxLength(MaxNameLength)]
        public string Name { get; set; }

        [MaxLength(MaxCountryLength)]
        public string Country { get; set; }

        [MaxLength(MaxCityLength)]
        public string City { get; set; }

        [MaxLength(MaxAddressLength)]
        public string Address { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
        
    }
}
