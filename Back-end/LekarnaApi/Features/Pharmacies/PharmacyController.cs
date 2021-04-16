namespace LekarnaApi.Features
{
    using LekarnaApi.Features.Pharmacies;
    using LekarnaApi.Features.Pharmacies.Models;
    using LekarnaApi.Infrastructure.Extensions;
    using LekarnaApi.Models.Pharmacy;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using static Infrastructure.WebConstants;
    [Authorize]
    public class PharmacyController : ApiController
    {
        private readonly IPharmacyService pharmacyService;

        public PharmacyController(IPharmacyService pharmacyService)
        {
            this.pharmacyService = pharmacyService;
        }

        [HttpPost]
        [Route("/pharmacy/create")]
        public async Task<ActionResult> Create([FromBody] CreatePharmacyRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.pharmacyService.Create(model.Name, model.Address, model.Country, model.City, model.ImageUrl, userId);

            return Created(nameof(this.Create), id);
        }

        [HttpGet]
        [Route("/pharmacy/id")]
        public async Task<ActionResult<PharmacyDetailsModel>> Details(string id)

             => await this.pharmacyService.Details(id);


        [HttpGet]
        public async Task<IEnumerable<PharmacyListingModel>> UserPharmacies()
        {
            var userId = this.User.GetId();

            return await this.pharmacyService.ByUser(userId);
        }

        [HttpPut]
        public async Task<ActionResult> Update(UpdatePharmacyRequestModel model)
        {

            var updated = await this.pharmacyService.Update(
                model.Id,
                model.Name,
                model.Address,
                model.City,
                model.Country,
                model.ImageUrl
                );

            if (!updated)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete]
        [Route(Id)]
        public async Task<ActionResult> Delete(string id)
        {
            var userId = this.User.GetId();

            var deleted = await this.pharmacyService.Delete(id, userId);

            if (!deleted)
            {
                return BadRequest();
            }
            return Ok();
        }

    }
}
