

namespace LekarnaApi.Features.Pharmacies
{
    using LekarnaApi.Data;
    using LekarnaApi.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class PharmacyService : IPharmacyService
    {
        private readonly LekarnaDbContext data;

        public PharmacyService(LekarnaDbContext data)
        {
            this.data = data;
        }

        public async Task<int> Create(string address, string country, string city, string imageUrl, string userId)
        {
            var pharmacy = new Pharmacy
            {
                Address = address,
                Country = country,
                City = city,
                ImageUrl = imageUrl,
                UserId = userId
            };

            this.data.Add(pharmacy);

            await this.data.SaveChangesAsync();

            return pharmacy.Id;
        }
    }
}
