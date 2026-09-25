const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    rating: 4.5,
    reviews: 120,
    description: "High-quality wireless headphones with clear sound and comfortable ear cushions."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    rating: 4.2,
    reviews: 85,
    description: "Smart watch with fitness tracking, heart-rate monitoring and notification support."
  },
  {
    id: 3,
    name: "Sports Shoes",
    price: 1999,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    rating: 4.3,
    reviews: 64,
    description: "Comfortable sports shoes suitable for running, walking and daily workouts."
  },
  {
    id: 4,
    name: "Backpack",
    price: 1299,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.1,
    reviews: 42,
    description: "Durable backpack with multiple compartments for college, office and travel."
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 599,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    rating: 4.0,
    reviews: 38,
    description: "Soft and comfortable cotton T-shirt suitable for everyday wear."
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 799,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    rating: 4.2,
    reviews: 51,
    description: "Stylish sunglasses with UV protection and a lightweight frame."
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 1199,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    rating: 4.4,
    reviews: 96,
    description: "Portable Bluetooth speaker with powerful sound and long battery life."
  },
  {
    id: 8,
    name: "Casual Sneakers",
    price: 1799,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
    rating: 4.3,
    reviews: 73,
    description: "Modern casual sneakers designed for comfort and everyday use."
  },
  {
    id: 9,
    name: "Hoodie",
    price: 999,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
    rating: 4.5,
    reviews: 67,
    description: "Warm and comfortable hoodie with a soft inner fabric."
  },
  {
    id: 10,
    name: "Laptop Bag",
    price: 1499,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600",
    rating: 4.4,
    reviews: 58,
    description: "Protective laptop bag with padded compartments and storage pockets."
  },
  {
    id: 11,
    name: "Wireless Mouse",
    price: 699,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",
    rating: 4.1,
    reviews: 91,
    description: "Ergonomic wireless mouse with smooth tracking and comfortable grip."
  },
  {
    id: 12,
    name: "Analog Watch",
    price: 1299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600",
    rating: 4.3,
    reviews: 46,
    description: "Classic analog watch with a stylish design for everyday occasions."
  },
  {
    id: 13,
    name: "Denim Jeans",
    price: 1399,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600",
    rating: 4.2,
    reviews: 82,
    description: "Comfortable denim jeans with a modern fit and durable fabric."
  },
  {
    id: 14,
    name: "Travel Bag",
    price: 1899,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    rating: 4.4,
    reviews: 55,
    description: "Spacious travel bag with multiple compartments for short trips."
  },
  {
    id: 15,
    name: "Running Shoes",
    price: 2299,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600",
    rating: 4.6,
    reviews: 104,
    description: "Lightweight running shoes with cushioned soles for better comfort."
  },
    {
    id: 16,
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
    rating: 4.6,
    reviews: 112,
    description: "Mechanical keyboard with responsive keys and RGB lighting for gaming and work."
  },
  {
    id: 17,
    name: "Tablet Stand",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600",
    rating: 4.2,
    reviews: 47,
    description: "Adjustable tablet stand suitable for studying, video calls and entertainment."
  },
  {
    id: 18,
    name: "Ceramic Coffee Mug",
    price: 399,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600",
    rating: 4.5,
    reviews: 89,
    description: "Elegant ceramic coffee mug for enjoying tea, coffee and other beverages."
  },
  {
    id: 19,
    name: "Desk Lamp",
    price: 1099,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    rating: 4.3,
    reviews: 63,
    description: "Modern desk lamp providing comfortable lighting for study and office work."
  },
  {
    id: 20,
    name: "Water Bottle",
    price: 699,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600",
    rating: 4.4,
    reviews: 76,
    description: "Reusable water bottle designed for daily hydration at work, college and travel."
  },
  {
    id: 21,
    name: "Yoga Mat",
    price: 799,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600",
    rating: 4.3,
    reviews: 58,
    description: "Comfortable yoga mat with a non-slip surface for workouts and stretching."
  },
  {
    id: 22,
    name: "Football",
    price: 599,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600",
    rating: 4.5,
    reviews: 94,
    description: "Durable football suitable for recreational games and outdoor practice."
  },
  {
    id: 23,
    name: "Baseball Cap",
    price: 449,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600",
    rating: 4.1,
    reviews: 36,
    description: "Casual baseball cap with an adjustable fit for everyday outdoor wear."
  },
  {
    id: 24,
    name: "Leather Wallet",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
    rating: 4.4,
    reviews: 71,
    description: "Compact wallet with multiple slots for cards, cash and everyday essentials."
  },
  {
    id: 25,
    name: "Bluetooth Earbuds",
    price: 1599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
    rating: 4.2,
    reviews: 108,
    description: "Compact wireless earbuds with clear audio and a convenient charging case."
  },
  {
    id: 26,
    name: "Portable Power Bank",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609592424521-7d8a2e7a4f90?w=600",
    rating: 4.3,
    reviews: 84,
    description: "Portable power bank for charging smartphones and other compatible devices."
  },
  {
    id: 27,
    name: "Electric Kettle",
    price: 1799,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1594213114663-d94db9b171e4?w=600",
    rating: 4.4,
    reviews: 62,
    description: "Electric kettle for quickly preparing hot water, tea and coffee."
  },
  {
    id: 28,
    name: "Cushion Pillow",
    price: 499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600",
    rating: 4.2,
    reviews: 45,
    description: "Soft decorative cushion pillow designed to add comfort to your living space."
  },
  {
    id: 29,
    name: "Wall Clock",
    price: 999,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600",
    rating: 4.1,
    reviews: 39,
    description: "Minimal wall clock with a stylish design for home or office interiors."
  },
  {
    id: 30,
    name: "Scented Candle",
    price: 349,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600",
    rating: 4.5,
    reviews: 67,
    description: "Pleasantly scented candle designed to create a relaxing atmosphere at home."
  },
  {
    id: 31,
    name: "Travel Pillow",
    price: 599,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600",
    rating: 4.3,
    reviews: 52,
    description: "Comfortable travel pillow designed to support your neck during journeys."
  },
  {
    id: 32,
    name: "Lunch Box",
    price: 649,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    rating: 4.2,
    reviews: 61,
    description: "Practical lunch box for carrying homemade meals to college, office and travel."
  },
  {
    id: 33,
    name: "Plant Pot",
    price: 299,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600",
    rating: 4.6,
    reviews: 88,
    description: "Decorative plant pot for indoor plants and adding greenery to your space."
  },
  {
    id: 34,
    name: "Drawing Tablet",
    price: 3299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600",
    rating: 4.4,
    reviews: 73,
    description: "Digital drawing tablet for creative sketching, illustrations and design practice."
  },
  {
    id: 35,
    name: "Travel Organizer",
    price: 749,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=600",
    rating: 4.3,
    reviews: 49,
    description: "Compact travel organizer for keeping essential accessories and belongings arranged."
  }
];

export default products;