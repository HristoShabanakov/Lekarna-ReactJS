namespace LekarnaApi.Data
{
    using LekarnaApi.Data.Models;
    using LekarnaApi.Data.Models.Base;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    public class LekarnaDbContext : IdentityDbContext<User>
    {
        public LekarnaDbContext(DbContextOptions<LekarnaDbContext> options)
            : base(options)
        {
        }
        public DbSet<Pharmacy> Pharmacies { get; set; }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            this.ApplyAuditInformation();

            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            this.ApplyAuditInformation();

            return base.SaveChangesAsync(cancellationToken);
        }

        public override int SaveChanges()
        {
            this.ApplyAuditInformation();

            return base.SaveChanges();
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            this.ApplyAuditInformation();

            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<Pharmacy>()
                .HasOne(c => c.User)
                .WithMany(p => p.pharmacies)
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.Restrict);



            base.OnModelCreating(builder);
        }

        private void ApplyAuditInformation()

             => this.ChangeTracker
                .Entries()
                .Select(entry => new
                {
                    entry.Entity,
                    entry.State
                })
                .ToList()
                .ForEach(entry =>
                {
                    if (entry.Entity is IDeletableEntity deletableEntity)
                    {
                        deletableEntity.DeletedOn = DateTime.UtcNow;
                    }
                    else if (entry.Entity is IEntity entity)
                    {
                        if (entry.State == EntityState.Added)
                        {
                            entity.CreatedOn = DateTime.UtcNow;
                        }
                        else if (entry.State == EntityState.Modified)
                        {
                            entity.ModifiedOn = DateTime.UtcNow;
                        }
                    }
                });
    }
}
