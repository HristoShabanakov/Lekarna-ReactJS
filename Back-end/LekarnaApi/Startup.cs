
namespace LekarnaApi
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using LekarnaApi.Data;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using LekarnaApi.Infrastructure;

    public class Startup
    {
        public Startup(IConfiguration configuration) => this.Configuration = configuration;


        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)

            => services
             .AddDbContext<LekarnaDbContext>(options => options
               .UseSqlServer(this.Configuration.GetDefaultConnectionString()))
                .AddIdentity()
                .AddJwtAuthentication(services.GetApplicationSettings(this.Configuration))
                .AddControllers();


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }

            app
               .UseRouting()
               .UseCors(options => options
                 .WithExposedHeaders("Authorization")
                 .AllowAnyOrigin()
                 .AllowAnyHeader()
                 .AllowAnyMethod())
               .UseAuthentication()
               .UseAuthorization()

               .UseEndpoints(endpoints =>
               {
                endpoints.MapControllers();
               })

            .ApplyMigrations();
        }
    }
}
