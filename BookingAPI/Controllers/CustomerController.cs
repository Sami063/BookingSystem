using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using BookingAPI.Dto;
using BookingAPI.Models;
using BookingAPI.Interface;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BookingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;
        public CustomerController(ICustomerRepository customerRepository, IMapper mapper)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Customer>))]
        public IActionResult GetCustomers()
        {
            var customers = _mapper.Map<List<CustomerDto>>(_customerRepository.GetCustomers());

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(customers);
        }

        [HttpGet("{customerId}")]
        [ProducesResponseType(200, Type = typeof(Customer))]
        [ProducesResponseType(400)]
        public IActionResult GetCustomerId(int customerId)
        {
            if (!_customerRepository.CustomerExists(customerId))
                return NotFound();

            var customer = _mapper.Map<CustomerDto>(_customerRepository.GetCustomer(customerId));

            if (!ModelState.isValid)
                return BadRequest(ModelState);

            return Ok(customer);
        }
    }
}
