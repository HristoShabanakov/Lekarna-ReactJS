
namespace LekarnaApi.Features.Pharmacies
{
    using LekarnaApi.Features.Pharmacies.Models;
    using System.Collections;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPharmacyService
    {
        public Task<int> Create(string name, string address, string country, string city, string imageUrl, string userId);

        public Task<IEnumerable<PharmacyListingModel>> ByUser(string userId);

        public Task<PharmacyDetailsModel> Details(int id);

        public Task<bool> Update(int id, string name, string address, string city, string country, string imageUrl, string userId);
    }
}
