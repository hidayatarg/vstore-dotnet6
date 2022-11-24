using Microsoft.AspNetCore.Mvc;
using vStore.API.Data;
using vStore.API.Entities;

namespace vStore.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly StoreContext _storeConext;

        public ProductController(StoreContext storeConext)
        {
            _storeConext = storeConext;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var items =  _storeConext.Products.ToList();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            if (id <= 0)
                return BadRequest();

            var item = _storeConext.Products.FirstOrDefault(p => p.Id == id);
            
            if (item == null)
                return NotFound();
            
            return Ok(item);
        }


    }
}
