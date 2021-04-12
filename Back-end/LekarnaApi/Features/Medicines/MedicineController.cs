namespace LekarnaApi.Features.Medicines
{
    using LekarnaApi.Features.Medicines.Models;
    using LekarnaApi.Features.Pharmacies;
    using LekarnaApi.Infrastructure.Extensions;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using static Infrastructure.WebConstants;
    //[Authorize]
    public class MedicineController :ApiController
    {
        private readonly IPharmacyService pharmacyService;
        private readonly IMedicineService medicineService;
        public MedicineController(IPharmacyService pharmacyService, IMedicineService medicineService)
        {
            this.pharmacyService = pharmacyService;
            this.medicineService = medicineService;
        }

        [HttpPost]
        [Route("/medicine/create")]
        public async Task<ActionResult> Create([FromBody] CreateMedicineRequestModel model)
        {
           // var userId = this.User.GetId();

            var id = await this.medicineService.Create(model.Name, model.Price, model.Quantity, model.PharmacyId);

            return Created(nameof(this.Create), id);
        }

        [HttpGet]
        [Route("/medicine/id")]
        public async Task<ActionResult<MedicineDetailsModel>> Details(int id)

             => await this.medicineService.Details(id);

        [HttpPut]
        public async Task<ActionResult> Update(UpdateMedicineRequestModel model)
        {
            var updated = await this.medicineService.Update(
                model.Id,
                model.Name,
                model.Price,
                model.Quantity,
                model.PharmacyId
                );

            if (!updated)
            {
                return BadRequest();
            }
            return Ok();
        }

        [HttpDelete]
        [Route(Id)]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var deleted = await this.medicineService.Delete(id, userId);

            if (!deleted)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
