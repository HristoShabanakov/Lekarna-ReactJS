
namespace LekarnaApi.Features.Pharmacies
{
    using LekarnaApi.Features.Pharmacies.Models;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPharmacyService
    {
        Task<string> Create(string name, string address, string country, string city, string imageUrl, string userId);

        Task<IList<PharmacyListingModel>> ByUser(string userId);

        Task<PharmacyDetailsModel> Details(string id);

        Task<bool> Update(string id, string name, string address, string city, string country, string imageUrl);

        Task<bool> Delete(string id, string userId);
    }
}
