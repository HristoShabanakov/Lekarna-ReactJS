namespace LekarnaApi.Features.Medicines
{
    using LekarnaApi.Features.Medicines.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface IMedicineService
    {
        Task<string> Create(string name, string price, string quantity, string userId);

        Task<MedicineDetailsModel> Details(string id);

        Task<IEnumerable<MedicineListingModel>> GetAll(string pharmacyId);
        Task<bool> Update(string id, string name, string price, string quantity);

        Task<bool> Delete(string id, string userId);
    }
}
