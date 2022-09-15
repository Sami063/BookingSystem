using BookingAPI.Models;

namespace BookingAPI.Interface
{
    public interface IRestaurantRepository
    {
        ICollection<Restaurant> GetRestaurants();
        Restaurant GetRestaurant(int id);
        bool RestaurantExists(int id);
        bool CreateRestaurant(Restaurant restaurant);
        bool UpdateRestaurant(Restaurant restaurant);
        bool DeleteRestaurant(Restaurant restaurant);
        bool Save();
    }
}
