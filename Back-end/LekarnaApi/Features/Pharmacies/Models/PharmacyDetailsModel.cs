namespace LekarnaApi.Features.Pharmacies.Models
{
    public class PharmacyDetailsModel : PharmacyListingModel
    {
        public string Name { get; set; }

        public string Country { get; set; }

        public string Address { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }
    }
}
