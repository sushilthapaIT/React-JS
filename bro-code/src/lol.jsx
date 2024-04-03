using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingCartSystem
{
    // Step 1: Product class
    public class Product
    {
        private string productId;
        private string name;
        private double unitPrice;
        private string description;

        // Two-argument constructor
        public Product(string productId, string name)
        {
            this.productId = productId;
            this.name = name;
            this.unitPrice = 0.00;
            this.description = "";
        }

        // Three-argument constructor
        public Product(string productId, string name, double unitPrice)
        {
            this.productId = productId;
            this.name = name;
            this.unitPrice = unitPrice < 0 ? 0 : unitPrice;
            this.description = "";
        }

        // Four-argument constructor
        public Product(string productId, string name, double unitPrice, string description)
        {
            this.productId = productId;
            this.name = name;
            this.unitPrice = unitPrice < 0 ? 0 : unitPrice;
            this.description = description;
        }

        // Copy constructor
        public Product(Product product)
        {
            this.productId = product.productId;
            this.name = product.name;
            this.unitPrice = product.unitPrice;
            this.description = product.description;
        }

        // Getters and setters
        public string ProductId
        {
            get { return productId; }
            set { productId = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public double UnitPrice
        {
            get { return unitPrice; }
            set { unitPrice = value < 0 ? unitPrice : value; }
        }

        public string Description
        {
            get { return description; }
            set { description = value; }
        }

        // ToString method override
        public override string ToString()
        {
            return $"{name} : ${unitPrice}";
        }

        // Equals method override
        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
                return false;

            Product otherProduct = (Product)obj;
            return productId == otherProduct.productId;
        }
    }

    // Step 2: CartItem class
    public class CartItem
    {
        private Product product;
        private int quantity;

        // Two-argument constructor
        public CartItem(Product product, int quantity)
        {
            this.product = product;
            this.quantity = quantity <= 0 ? 1 : quantity;
        }

        // Copy constructor
        public CartItem(CartItem cartItem)
        {
            this.product = new Product(cartItem.product);
            this.quantity = cartItem.quantity;
        }

        // Getters and setters
        public Product Product
        {
            get { return product; }
            set { product = value; }
        }

        public int Quantity
        {
            get { return quantity; }
            set { quantity = value <= 0 ? quantity : value; }
        }

        // Add quantity method
        public int AddQuantity(int quantity)
        {
            this.quantity += quantity;
            return this.quantity;
        }

        // Subtract quantity method
        public int SubQuantity(int quantity)
        {
            this.quantity -= quantity;
            if (this.quantity < 0)
                this.quantity = 0;
            return this.quantity;
        }

        // Get total method
        public double GetTotal()
        {
            return product.UnitPrice * quantity;
        }

        // ToString method override
        public override string ToString()
        {
            return $"{product.Name} ( {quantity} @ ${product.UnitPrice} )";
        }

        // Equals method override
        // Equals method override
        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
                return false;

            CartItem otherCartItem = (CartItem)obj;
            return product.Equals(otherCartItem.Product) && quantity == otherCartItem.quantity;
        }

    }

    // Step 3: ShoppingCart class
    public class ShoppingCart
    {
        private List<CartItem> cart;

        // No-argument constructor
        public ShoppingCart()
        {
            cart = new List<CartItem>();
        }

        // Copy constructor
        public ShoppingCart(ShoppingCart shoppingCart)
        {
            cart = new List<CartItem>(shoppingCart.cart.Count);
            foreach (CartItem cartItem in shoppingCart.cart)
            {
                cart.Add(new CartItem(cartItem));
            }
        }

        // Get all items count method
        public int GetAllItemsCount()
        {
            int totalCount = 0;
            foreach (CartItem cartItem in cart)
            {
                totalCount += cartItem.Quantity;
            }
            return totalCount;
        }

        // Get distinct items count method
        public int GetDistinctItemsCount()
        {
            return cart.Count;
        }

        // Get cart item by ID method
        public CartItem GetCartItem(string id)
        {
            return cart.Find(item => item.Product.ProductId == id);
        }

        // Get cart item by index method
        public CartItem GetCartItem(int index)
        {
            if (index >= 0 && index < cart.Count)
                return cart[index];
            else
                return null;
        }

        // Add item method
        public void AddItem(Product product, int quantity)
        {
            cart.Add(new CartItem(product, quantity <= 0 ? 1 : quantity));
        }

        // Get total method
        public double GetTotal()
        {
            double total = 0;
            foreach (CartItem cartItem in cart)
            {
                total += cartItem.GetTotal();
            }
            return total;
        }

        // ToString method override
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            foreach (CartItem cartItem in cart)
            {
                sb.AppendLine(cartItem.ToString());
            }
            return sb.ToString();
        }

        // Equals method override
        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType())
                return false;

            ShoppingCart otherCart = (ShoppingCart)obj;

            if (cart.Count != otherCart.cart.Count)
                return false;

            for (int i = 0; i < cart.Count; i++)
            {
                if (!cart[i].Equals(otherCart.cart[i]))
                    return false;
            }
            return true;
        }

        // Remove item at index method
        public void RemoveAt(int index)
        {
            if (index >= 0 && index < cart.Count)
                cart.RemoveAt(index);
        }

        // Clear method
        public void Clear()
        {
            cart.Clear();
        }
    }

    // Step 4: ShoppingCartTester class
    class ShoppingCartTester
    {
        static void Main(string[] args)
        {
            // Step 4:
            // 1. Create 5 Products
            Product product1 = new Product("001", "Product 1", 10.50);
            Product product2 = new Product("002", "Product 2", 20.75);
            Product product3 = new Product("003", "Product 3", 15.00);
            Product product4 = new Product("004", "Product 4", 5.25);
            Product product5 = new Product("005", "Product 5", 30.00);

            // 2. Create 5 CartItems
            CartItem cartItem1 = new CartItem(product1, 3);
            CartItem cartItem2 = new CartItem(product2, 2);
            CartItem cartItem3 = new CartItem(product3, 1);
            CartItem cartItem4 = new CartItem(product4, 4);
            CartItem cartItem5 = new CartItem(product5, 5);

            // 3. Create an instance of ShoppingCart and add CartItems
            ShoppingCart cart = new ShoppingCart();
            cart.AddItem(product1, 3);
            cart.AddItem(product2, 2);
            cart.AddItem(product3, 1);
            cart.AddItem(product4, 4);
            cart.AddItem(product5, 5);

            // 4. Test getCartItem method
            Console.WriteLine("Get CartItem by index:");
            Console.WriteLine(cart.GetCartItem(2)); // Should print Product 3
            Console.WriteLine("Get CartItem by ID:");
            Console.WriteLine(cart.GetCartItem("004")); // Should print Product 4

            // 5. Print contents of ShoppingCart
            Console.WriteLine("Contents of ShoppingCart:");
            Console.WriteLine(cart);

            // 6. Print total cost of ShoppingCart
            Console.WriteLine($"Total Cost: ${cart.GetTotal()}");
        }
    }
}

