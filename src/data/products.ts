const productImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop",
];

export const featuredProducts = [
  { id: 1, name: "Pro Hex Dumbbell Set (5-50 lbs)", price: 599, originalPrice: 799, rating: 4.8, reviews: 234, image: productImages[0], badge: "sale" as const },
  { id: 2, name: "Olympic Barbell - 20kg Chrome", price: 189, rating: 4.9, reviews: 187, image: productImages[1] },
  { id: 3, name: "Adjustable Weight Bench Pro", price: 349, originalPrice: 449, rating: 4.7, reviews: 156, image: productImages[2], badge: "sale" as const },
  { id: 4, name: "Competition Kettlebell 24kg", price: 89, rating: 4.6, reviews: 98, image: productImages[3] },
  { id: 5, name: "Power Rack Elite 3.0", price: 1299, rating: 4.9, reviews: 312, image: productImages[4], badge: "new" as const },
  { id: 6, name: "Rubber Bumper Plates Set", price: 449, originalPrice: 549, rating: 4.5, reviews: 145, image: productImages[5], badge: "sale" as const },
  { id: 7, name: "Resistance Bands Pro Kit", price: 39, rating: 4.4, reviews: 523, image: productImages[6] },
  { id: 8, name: "ProRunner X3 Treadmill", price: 1899, rating: 4.8, reviews: 89, image: productImages[7], badge: "new" as const },
];

export const bestSellers = [
  { id: 11, name: "Adjustable Dumbbell 5-52.5 lbs", price: 299, rating: 4.9, reviews: 892, image: productImages[1] },
  { id: 12, name: "Heavy Duty Squat Rack", price: 599, originalPrice: 749, rating: 4.8, reviews: 445, image: productImages[4], badge: "sale" as const },
  { id: 13, name: "Battle Rope 50ft", price: 69, rating: 4.5, reviews: 234, image: productImages[6] },
  { id: 14, name: "Gym Flooring Tiles (6-pack)", price: 79, rating: 4.7, reviews: 567, image: productImages[5] },
  { id: 15, name: "Ab Roller Pro", price: 29, rating: 4.3, reviews: 1203, image: productImages[2] },
  { id: 16, name: "Pull-Up Bar Wall Mount", price: 89, originalPrice: 119, rating: 4.6, reviews: 334, image: productImages[0], badge: "sale" as const },
];

export const newArrivals = [
  { id: 21, name: "Smart Dumbbell System 2026", price: 499, rating: 4.9, reviews: 23, image: productImages[3], badge: "new" as const },
  { id: 22, name: "Curved Treadmill Elite", price: 3499, rating: 5.0, reviews: 8, image: productImages[7], badge: "new" as const },
  { id: 23, name: "Carbon Fiber Jump Rope", price: 34, rating: 4.7, reviews: 56, image: productImages[6], badge: "new" as const },
  { id: 24, name: "Magnetic Rowing Machine", price: 699, rating: 4.8, reviews: 12, image: productImages[0], badge: "new" as const },
  { id: 25, name: "Plyo Box Adjustable Set", price: 149, rating: 4.5, reviews: 34, image: productImages[2], badge: "new" as const },
];

export const flashSaleProducts = [
  { id: 31, name: "Olympic Weight Plate Set 300lbs", price: 399, originalPrice: 699, rating: 4.8, reviews: 234, image: productImages[5], badge: "sale" as const },
  { id: 32, name: "Multi-Station Home Gym", price: 899, originalPrice: 1499, rating: 4.6, reviews: 89, image: productImages[4], badge: "sale" as const },
  { id: 33, name: "EZ Curl Bar Chrome", price: 49, originalPrice: 89, rating: 4.5, reviews: 345, image: productImages[1], badge: "sale" as const },
  { id: 34, name: "Yoga Mat Premium 6mm", price: 19, originalPrice: 39, rating: 4.7, reviews: 1200, image: productImages[6], badge: "sale" as const },
  { id: 35, name: "Weighted Vest 40lbs", price: 79, originalPrice: 129, rating: 4.4, reviews: 178, image: productImages[3], badge: "sale" as const },
];
