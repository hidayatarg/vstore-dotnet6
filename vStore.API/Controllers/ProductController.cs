using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vStore.API.Data;
using vStore.API.Entities;

namespace vStore.API.Controllers
{
    public class ProductController : BaseApiController
    {
        private readonly StoreContext _storeConext;

        public ProductController(StoreContext storeConext)
        {
            _storeConext = storeConext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var items = await _storeConext.Products.ToListAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            if (id <= 0)
                return BadRequest();

            var item = await _storeConext.Products.FirstOrDefaultAsync(p => p.Id == id);
            
            if (item == null)
                return NotFound();
            
            return Ok(item);
        }
    }
}
