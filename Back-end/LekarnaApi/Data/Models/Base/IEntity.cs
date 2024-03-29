﻿
namespace LekarnaApi.Data.Models.Base
{
    using System;

    public interface IEntity
    {
        DateTime CreatedOn { get; set; }

        [Requred]
        string CreatedBy { get; set; }

        DateTime? ModifiedOn { get; set; }

        string ModifiedBy { get; set; }
    }
}
