using BookingAPI.Data;
using BookingAPI.Interface;
using BookingAPI.Models;

namespace BookingAPI.Repository
{
    public class RestaurantRepository : IRestaurantRepository
    {
        private readonly DataContext _context;

        public RestaurantRepository(DataContext context)
        {
            _context = context;
        }
        public bool RestaurantExists(int id)
        {
            return _context.Restaurants.Any(r => r.RestaurantId == id);
        }

        public bool CreateRestaurant(Restaurant restaurant)
        {
            _context.Add(restaurant);
            return Save();
        }

        public bool DeleteRestaurant(Restaurant restaurant)
        {
            _context.Remove(restaurant);
            return Save();
        }

        public Restaurant GetRestaurant(int id)
        {
            return _context.Restaurants.Where(e => e.RestaurantId == id).FirstOrDefault();
        }

        public ICollection<Restaurant> GetRestaurants()
        {
            throw new NotImplementedException();
            //Kommer senere
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateRestaurant(Restaurant restaurant)
        {
            _context.Update(restaurant);
            return Save();
        }
    }
}