﻿namespace LekarnaApi.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    //[Authorize(AuthenticationSchemes = "Bearer")]
    public abstract class ApiController : ControllerBase
    {

    }
}