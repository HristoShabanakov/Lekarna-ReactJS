namespace LekarnaApi.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;


    public class User : IdentityUser
    {
        public DateTime CreatedOn { get; set; }

        [Requred]
        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }

        public IEnumerable<Pharmacy> pharmacies { get; set; } = new HashSet<Pharmacy>();
    }
}
