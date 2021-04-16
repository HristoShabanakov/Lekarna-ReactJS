namespace LekarnaApi.Features.Pharmacies.Models
{
    using LekarnaApi.Data.Models;
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.PharmacyValidations;
    public class UpdatePharmacyRequestModel
    {
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
    }
}
