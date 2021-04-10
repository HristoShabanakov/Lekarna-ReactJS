namespace LekarnaApi.Features.Pharmacies
{
    using LekarnaApi.Data;
    using LekarnaApi.Data.Models;
    using LekarnaApi.Features.Pharmacies.Models;
    using Microsoft.EntityFrameworkCore;
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

        public async Task<IEnumerable<PharmacyListingModel>> ByUser(string userId)
        => await this.data.Pharmacies.Where(c => c.UserId == userId)
            .Select(x => new PharmacyListingModel
            {
                Id = x.Id,
                ImageUrl = x.ImageUrl
            })
            .ToListAsync();

        public async Task<int> Create(string name, string address, string country, string city, string imageUrl, string userId)
        {
            var pharmacy = new Pharmacy
            {
                Name = name,
                Address = address,
                Country = country,
                City = city,
                ImageUrl = imageUrl,
                UserId = userId,
            };

            this.data.Add(pharmacy);

            await this.data.SaveChangesAsync();

            return pharmacy.Id;
        }

        public async Task<int> Update(string name, string address, string country, string city, string imageUrl, string userId)
        {
            var pharmacy = await this.ByUser(userId);

            if (pharmacy == null)
            {
                Console.WriteLine("Error");
            }

            return 1;

        }


        public async Task<PharmacyDetailsModel> Details(int id)
       =>  this.data.Pharmacies.Where(x => x.Id == id)
            .Select(x => new PharmacyDetailsModel
            {
                Id = x.Id,
                UserId = x.UserId,
                Address = x.Address,
                Country = x.Country,
                Name = x.Name,
                ImageUrl = x.ImageUrl,
                UserName = x.User.UserName
            })
            .FirstOrDefault();

        public async Task<bool> Update(int id, string name, string address, string city, string country, string imageUrl, string userId)
        {
            var pharmacy = this.data.Pharmacies
                .Where(x => x.Id == id && x.UserId == userId)
                .FirstOrDefault();

            if (pharmacy == null)
            {
                return false;
            }

            pharmacy.Name = name;
            pharmacy.Address = address;
            pharmacy.City = city;
            pharmacy.Country = country;
            pharmacy.ImageUrl = imageUrl;

            await this.data.SaveChangesAsync();

            return true;
        }
    }
}
