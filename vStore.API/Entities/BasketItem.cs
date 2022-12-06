namespace vStore.API.Entities
{
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }


        // navigation properties
        // we will not see product info but id
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}