

namespace LekarnaApi.Data.Models
{
    using LekarnaApi.Data.Models.Base;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class Stock : DeletableEntity
    {
        public Stock()
        {
            this.Medicines = new HashSet<Medicine>();
        }
        public int Id { get; set; }
        public ICollection<Medicine> Medicines { get; set; }
    }
}
