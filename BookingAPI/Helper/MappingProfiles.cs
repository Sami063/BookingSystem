using AutoMapper;
using BookingAPI.Dto;
using BookingAPI.Models;

namespace BookingAPI.Helper
{
    public class MappingProfiles
    {
        CreateMap<Restaurant, RestaurantDto>();
        CreateMap<RestaurantDto, Restaurant>();
        CreateMap<Customer, CustomerDto>();
        CreateMap<CustomerDto, Customer>();
    }
}
