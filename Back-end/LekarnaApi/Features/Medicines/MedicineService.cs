namespace LekarnaApi.Features.Medicines
{
    using LekarnaApi.Data;
    using LekarnaApi.Data.Models;
    using LekarnaApi.Features.Medicines.Models;
    using LekarnaApi.Features.Pharmacies;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class MedicineService : IMedicineService
    {
        private readonly LekarnaDbContext data;
        private readonly IPharmacyService pharmacyService;

        public MedicineService(LekarnaDbContext data, IPharmacyService pharmacyService)
        {
            this.data = data;
            this.pharmacyService = pharmacyService;
        }
        public async Task<string> Create(string name, string price, string quantity, string userId)
        {
            var pharmacies = await this.pharmacyService.ByUser(userId);

            var medicine = new Medicine
            {
                Name = name,
                Price = price,
                Quantity = quantity,
                PharmacyId = pharmacies[0].Id
            };

            this.data.Medicines.Add(medicine);

            await this.data.SaveChangesAsync();

            return medicine.Id;
        }

        public async Task<MedicineDetailsModel> Details(string id)
        => await this.data.Medicines.Where(x => x.Id == id)
            .Select(x => new MedicineDetailsModel
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
                Quantity = x.Quantity,
            })
            .FirstOrDefaultAsync();

        public async Task<bool> Update(string id, string name, string price, string quantity)
        {
            var medicine = await this.data.Medicines.Where(x => x.Id == id).FirstOrDefaultAsync();

            if (medicine != null)
            {
                medicine.Name = name;
                medicine.Price = price;
                medicine.Quantity = quantity;

                this.data.Update(medicine);

                await this.data.SaveChangesAsync();

                return true;
            }

            return false;
        }
        public async Task<bool> Delete(string id, string userId)
        {
            var medicine = this.data.Medicines
                .Where(x => x.Id == id)
                .FirstOrDefault();

            if (medicine == null)
            {
                return false;
            }

            this.data.Medicines.Remove(medicine);
            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<IEnumerable<MedicineListingModel>> GetAllMedicines(string id)
        => await this.data
                .Medicines
                .Where(x => x.Id == id)
                .Select(x => new MedicineListingModel()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Price = x.Price,
                    Quantity = x.Quantity,
                })
                .ToListAsync();

        public async Task<IEnumerable<MedicineListingModel>> GetAll(string pharmacyId)
        => await this.data.Medicines.Where(x => x.PharmacyId == pharmacyId)
            .Select(x => new MedicineListingModel
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
                Quantity = x.Quantity,
            })
            .ToListAsync();
    }
}
