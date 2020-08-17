﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LekarnaApi.Infrastructure
{
    public static class ConfigurationExtensions
    {
        public static string GetDefaultConnectionString (this IConfiguration configuration)

            => configuration.GetConnectionString("DefaultConnection");
        
        public static AppSettings GetApplicationSettings (this IServiceCollection services, IConfiguration configuration)
        {
            var applicationSettingsConfiguration = configuration.GetSection("ApplicationSettings");
            services.Configure<AppSettings>(applicationSettingsConfiguration);

            return applicationSettingsConfiguration.Get<AppSettings>();
        }
    }
}
