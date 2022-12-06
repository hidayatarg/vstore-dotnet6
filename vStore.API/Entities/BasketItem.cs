using System.ComponentModel.DataAnnotations.Schema;

namespace vStore.API.Entities
{
    [Table("Basketitems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }


        // navigation properties
        // we will not see product info but id
        public int ProductId { get; set; }
        public Product Product { get; set; }
        
        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}


// Reference
//https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key