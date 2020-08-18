namespace LekarnaApi.Features
{
    using LekarnaApi.Features.Pharmacies;
    using LekarnaApi.Infrastructure;
    using LekarnaApi.Models.Pharmacy;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    public class PharmacyController : ApiController
    {
        private readonly IPharmacyService pharmacyService;

        public PharmacyController(IPharmacyService pharmacyService)
        {
            this.pharmacyService = pharmacyService;
        }

        [Authorize]
        [HttpPost]

        public async Task<ActionResult> Create(CreatePharmacyRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.pharmacyService.Create(model.Address, model.Country, model.City, model.ImageUrl, userId);

            return Created(nameof(this.Create), id);
        }
    }
}
