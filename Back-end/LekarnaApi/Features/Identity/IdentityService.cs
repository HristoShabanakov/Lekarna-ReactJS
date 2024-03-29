﻿namespace LekarnaApi.Features.Identity
{
    using LekarnaApi.Data;
    using LekarnaApi.Features.Identity.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.IdentityModel.Tokens;
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;

    public class IdentityService : IIdentityService
    {
        private readonly LekarnaDbContext dbContext;

        public IdentityService(LekarnaDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public string GenerateJwtToken(string userId, string userName, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
        }

        public async Task<UserDetailsServiceModel> GetUser(string id)
        {
            return await this.dbContext.Users.Where(x => x.Id == id).Select(x => new UserDetailsServiceModel
            {
                Id = x.Id,
                UserName = x.UserName,
                Email = x.Email,
            })
            .FirstOrDefaultAsync();
        }
    }
}
