using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return;
            
            var products = new List<Product>
            {
                new Product
                {
                    Title = "Car",
                    Description = "test car description",
                    Price = 3000
                },
                new Product
                {
                    Title = "MackBook",
                    Description = "test macbook description",
                    Price = 1400
                },
                new Product
                {
                    Title = "Bat",
                    Description = "test bat description",
                    Price = 400
                },
                new Product
                {
                    Title = "FootBall",
                    Description = "test football description",
                    Price = 120
                },
                new Product
                {
                    Title = "Ball",
                    Description = "test ball description",
                    Price = 150
                },
                new Product
                {
                    Title = "Cap",
                    Description = "test cap description",
                    Price = 20
                },
                new Product
                {
                    Title = "Shirt",
                    Description = "test shirt description",
                    Price = 160
                },
                new Product
                {
                    Title = "Jean",
                    Description = "test Jean description",
                    Price = 110
                },
                new Product
                {
                    Title = "Shoes",
                    Description = "test shoe description",
                    Price = 350
                },
                new Product
                {
                    Title = "Bag",
                    Description = "test bag description",
                    Price = 1100
                }
            };

            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}