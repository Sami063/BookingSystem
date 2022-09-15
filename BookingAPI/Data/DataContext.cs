using BookingAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BookingAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Restaurant> Restaurants { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .HasKey(c => new {c.CustomerId});

            modelBuilder.Entity<Restaurant>()
                .HasKey(r => new {r.RestaurantId});

        }
    }
}