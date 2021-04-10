namespace LekarnaApi.Features.Identity
{
    using LekarnaApi.Data.Models;
    using LekarnaApi.Features.Identity.Models;
    using LekarnaApi.Infrastructure.Extensions;
    using LekarnaApi.Models.Identity.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using System.Threading.Tasks;

    public class IdentityController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly IIdentityService identityService;
        private readonly AppSettings appSettings;

        public IdentityController(
            UserManager<User> userManager,
            IOptions<AppSettings> appSettings,
            IIdentityService identityService)
        {
            this.userManager = userManager;
            this.identityService = identityService;
            this.appSettings = appSettings.Value;
        }
        [HttpPost]
        [Route("/identity/register")]
        public async Task<ActionResult<LoginResponseModel>> Register([FromBody]RegisterRequestModel model)
        {
            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName,
            };

            var result = await this.userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                return this.BadRequest(result.Errors);
            }

             var token = this.identityService.GenerateJwtToken(
                user.Id,
                user.UserName,
                this.appSettings.Secret);

            return new LoginResponseModel
            {
                Token = token,
                UserName = user.UserName,
                Id = user.Id
            };

        }

        [HttpPost]
        [Route("/identity/login")]
        public async Task<ActionResult<LoginResponseModel>> Login([FromBody]LoginRequestModel model)
        {
            var user = await this.userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return this.Unauthorized();
            }

            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);

            if (!passwordValid)
            {
                return this.Unauthorized();
            }

            var token = this.identityService.GenerateJwtToken(
                user.Id,
                user.UserName,
                this.appSettings.Secret);

            return new LoginResponseModel
            { 
                Token = token,
                UserName = user.UserName,
                Id = user.Id
            };
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = "Bearer")]
        [Route("/identity/user")]
        public async Task<ActionResult<UserDetailsServiceModel>> GetUser()
        {
            var userId = this.User.GetId();

            var user = await this.identityService.GetUser(userId);

            return this.Ok(user);
        }

    }
}
