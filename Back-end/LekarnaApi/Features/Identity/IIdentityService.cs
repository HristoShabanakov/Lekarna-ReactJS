using LekarnaApi.Features.Identity.Models;
using System.Threading.Tasks;

namespace LekarnaApi.Features.Identity
{
    public interface IIdentityService
    {
        string GenerateJwtToken(string userId, string userName, string secret);

        Task<UserDetailsServiceModel> GetUser(string id);

    }
}
