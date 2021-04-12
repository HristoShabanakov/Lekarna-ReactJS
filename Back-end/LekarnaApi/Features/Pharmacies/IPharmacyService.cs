
namespace LekarnaApi.Features.Pharmacies
{
    using LekarnaApi.Features.Pharmacies.Models;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPharmacyService
    {
        Task<int> Create(string name, string address, string country, string city, string imageUrl, string userId);

        Task<IEnumerable<PharmacyListingModel>> ByUser(string userId);

        Task<PharmacyDetailsModel> Details(int id);

        Task<bool> Update(int id, string name, string address, string city, string country, string imageUrl);

        Task<bool> Delete(int id, string userId);
    }
}
