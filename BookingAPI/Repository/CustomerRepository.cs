using BookingAPI.Data;
using BookingAPI.Interface;
using BookingAPI.Models;

namespace BookingAPI.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DataContext _context;

        public CustomerRepository(DataContext context)
        {
            _context = context;
        }
        public bool CustomerExists(int id)
        {
            return _context.Customers.Any(c => c.CustomerId == id);
        }

        public bool CreateCustomer(Customer customer)
        {
            _context.Add(customer);
            return Save();
        }

        public bool DeleteCustomer(Customer customer)
        {
            _context.Remove(customer);
            return Save();
        }

        public Customer GetCustomer(int id)
        {
            return _context.Customers.Where(e => e.CustomerId == id).FirstOrDefault();
        }

        public ICollection<Customer> GetCustomers()
        {
            throw new NotImplementedException();
            // Kommer senere
        }

        public bool Save()
        {
            var saved = _context.SaveChanges();
            return saved > 0 ? true : false;
        }

        public bool UpdateCustomer(Customer customer)
        {
            _context.Update(customer);
            return Save();
        }
    }
}