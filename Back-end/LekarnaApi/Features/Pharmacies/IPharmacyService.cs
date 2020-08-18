
namespace LekarnaApi.Features.Pharmacies
{
    using System.Threading.Tasks;

    public interface IPharmacyService
    {
        public Task<int> Create(string address, string country, string city, string imageUrl, string userId);
    }
}
