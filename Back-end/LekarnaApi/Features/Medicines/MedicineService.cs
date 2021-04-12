namespace LekarnaApi.Features.Medicines
{
    using LekarnaApi.Data;
    using LekarnaApi.Data.Models;
    using LekarnaApi.Features.Medicines.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class MedicineService : IMedicineService
    {
        private readonly LekarnaDbContext data;

        public MedicineService(LekarnaDbContext data)
        {
            this.data = data;
        }
        public async Task<int> Create(string name, decimal price, int quantity, int pharmacyId)
        {
            var medicine = new Medicine
            {
                Name = name,
                Price = price,
                Quantity = quantity,
                PharmacyId = pharmacyId,
            };

            this.data.Add(medicine);

            await this.data.SaveChangesAsync();

            return medicine.Id;
        }

        public async Task<MedicineDetailsModel> Details(int id)
        => await this.data.Medicines.Where(x => x.Id == id)
            .Select(x => new MedicineDetailsModel
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price,
                Quantity = x.Quantity,
                PharmacyId = x.PharmacyId
            })
            .FirstOrDefaultAsync();

        public async Task<bool> Update(int id, string name, decimal price, int quantity, int pharmacyId)
        {
            var medicine = await this.data.Medicines.Where(x => x.Id == id).FirstOrDefaultAsync();

            if (medicine != null)
            {
                medicine.Name = name;
                medicine.Price = price;
                medicine.Quantity = quantity;
                medicine.PharmacyId = pharmacyId;

                this.data.Update(medicine);

                await this.data.SaveChangesAsync();

                return true;
            }

            return false;
        }
        public async Task<bool> Delete(int id, string userId)
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
    }
}
