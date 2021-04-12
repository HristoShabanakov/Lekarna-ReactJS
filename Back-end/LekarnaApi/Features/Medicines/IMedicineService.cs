namespace LekarnaApi.Features.Medicines
{
    using LekarnaApi.Features.Medicines.Models;
    using System.Threading.Tasks;
    public interface IMedicineService
    {
        Task<int> Create(string name, decimal price, int quantity, int pharmacyId);

        Task<MedicineDetailsModel> Details(int id);

        Task<bool> Update(int id, string name, decimal price, int quantity, int pharmacyId);

        Task<bool> Delete(int id, string userId);
    }
}
