﻿namespace vStore.API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        // help undefine senarios
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            // if not in list
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity });
            }

            // if added to basket update quantity
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity)
        {
            var existingItem = Items.FirstOrDefault(item => item.ProductId == productId);
            if (existingItem == null) return;
            
            existingItem.Quantity -= quantity;
            if (existingItem.Quantity == 0) Items.Remove(existingItem);
        }
    }
}
