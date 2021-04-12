
namespace LekarnaApi.Data.Models.Base
{
    using System;
    
    public abstract class Entity : IEntity
    {
        public DateTime CreatedOn { get; set; }

        [Requred]
        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }  
    }
}
