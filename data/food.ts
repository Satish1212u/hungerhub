import { FoodItemType } from '@/components/FoodCard';

export const categories = [
  { id: '1', name: 'Pizza', icon: '🍕' },
  { id: '2', name: 'Burgers', icon: '🍔' },
  { id: '3', name: 'Sushi', icon: '🍣' },
  { id: '4', name: 'Healthy', icon: '🥗' },
  { id: '5', name: 'Desserts', icon: '🍰' },
  { id: '6', name: 'Drinks', icon: '🥤' },
];

export const allFoods: FoodItemType[] = [
  // PIZZA
  { id: 'p1', categoryId: 'pizza', name: 'Classic Pepperoni Pizza', price: 250, rating: 4.8, time: '25-30 min', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop', restaurant: 'Luigi\'s Pizzeria', badge: 'Best Seller' },
  { id: 'p2', categoryId: 'pizza', name: 'Margherita Pizza', price: 500, rating: 4.4, time: '25-30 min', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', restaurant: 'Luigi\'s Pizzeria' },
  { id: 'p3', categoryId: 'pizza', name: 'BBQ Chicken Pizza', price: 350, rating: 4.7, time: '30-40 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', restaurant: 'Crust & Co' },
  { id: 'p4', categoryId: 'pizza', name: 'Farmhouse Veggie Pizza', price: 499, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bite' },
  { id: 'p5', categoryId: 'pizza', name: 'Cheese Burst Pizza', price: 599, rating: 4.9, time: '25-30 min', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop', restaurant: 'Luigi\'s Pizzeria' },
  { id: 'p6', categoryId: 'pizza', name: 'Mexican Green Wave Pizza', price: 375, rating: 4.5, time: '25-30 min', image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop', restaurant: 'Crust & Co' },
  { id: 'p7', categoryId: 'pizza', name: 'Paneer Tikka Pizza', price: 450, rating: 4.7, time: '30-35 min', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop', restaurant: 'Spice House' },
  { id: 'p8', categoryId: 'pizza', name: 'Spicy Jalapeño Pizza', price: 325, rating: 4.4, time: '20-25 min', image: 'https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=800&auto=format&fit=crop', restaurant: 'Luigi\'s Pizzeria' },
  { id: 'p9', categoryId: 'pizza', name: 'Mushroom Delight Pizza', price: 280, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bite' },
  { id: 'p10', categoryId: 'pizza', name: 'Double Cheese Margherita', price: 420, rating: 4.8, time: '25-30 min', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', restaurant: 'Luigi\'s Pizzeria' },
  { id: 'p11', categoryId: 'pizza', name: 'Peri Peri Chicken Pizza', price: 599, rating: 4.7, time: '25-35 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop', restaurant: 'Crust & Co' },
  { id: 'p12', categoryId: 'pizza', name: 'Tandoori Chicken Pizza', price: 450, rating: 4.9, time: '30-40 min', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop', restaurant: 'Spice House' },

  // BURGERS
  { id: 'b1', categoryId: 'burgers', name: 'Double Cheeseburger', price: 125, rating: 4.6, time: '15-20 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Joint', badge: 'Popular' },
  { id: 'b2', categoryId: 'burgers', name: 'Spicy Crispy Chicken Burger', price: 199, rating: 4.5, time: '20-25 min', image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Joint' },
  { id: 'b3', categoryId: 'burgers', name: 'Vegan Black Bean Burger', price: 130, rating: 4.2, time: '15-25 min', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bite' },
  { id: 'b4', categoryId: 'burgers', name: 'BBQ Bacon Burger', price: 145, rating: 4.7, time: '20-25 min', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Hub' },
  { id: 'b5', categoryId: 'burgers', name: 'Classic Veggie Burger', price: 109, rating: 4.3, time: '15-20 min', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bites' },
  { id: 'b6', categoryId: 'burgers', name: 'Cheese Stuffed Burger', price: 109, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Joint' },
  { id: 'b7', categoryId: 'burgers', name: 'Grilled Chicken Burger', price: 129, rating: 4.5, time: '18-22 min', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop', restaurant: 'Grill House' },
  { id: 'b8', categoryId: 'burgers', name: 'Mushroom Swiss Burger', price: 130, rating: 4.4, time: '20-25 min', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Hub' },
  { id: 'b9', categoryId: 'burgers', name: 'Peri Peri Chicken Burger', price: 125, rating: 4.7, time: '20-30 min', image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?q=80&w=800&auto=format&fit=crop', restaurant: 'Spice Grill' },
  { id: 'b10', categoryId: 'burgers', name: 'Crispy Fish Burger', price: 120, rating: 4.3, time: '20-25 min', image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800&auto=format&fit=crop', restaurant: 'Sea Bites' },
  { id: 'b11', categoryId: 'burgers', name: 'Paneer Supreme Burger', price: 130, rating: 4.5, time: '18-22 min', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop', restaurant: 'Desi Tadka' },
  { id: 'b12', categoryId: 'burgers', name: 'Loaded Double Patty Burger', price: 159, rating: 4.8, time: '25-30 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', restaurant: 'Burger Joint' },

  // SUSHI
  { id: 's1', categoryId: 'sushi', name: 'Spicy Salmon Roll', price: 160, rating: 4.9, time: '30-40 min', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop', restaurant: 'Tokyo Bites', badge: 'Must Try' },
  { id: 's2', categoryId: 'sushi', name: 'Spicy Tuna Bowl', price: 155, rating: 4.8, time: '20-30 min', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', restaurant: 'Tokyo Bites' },
  { id: 's3', categoryId: 'sushi', name: 'Dragon Roll Menu', price: 200, rating: 4.9, time: '35-45 min', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', restaurant: 'Sushi Master' },
  { id: 's4', categoryId: 'sushi', name: 'California Roll', price: 100, rating: 4.6, time: '20-30 min', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop', restaurant: 'Tokyo Bites' },
  { id: 's5', categoryId: 'sushi', name: 'Philadelphia Roll', price: 120, rating: 4.7, time: '25-35 min', image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format&fit=crop', restaurant: 'Sushi Master' },
  { id: 's6', categoryId: 'sushi', name: 'Tempura Shrimp Roll', price: 150, rating: 4.8, time: '30-40 min', image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=800&auto=format&fit=crop', restaurant: 'Ocean Sushi' },
  { id: 's7', categoryId: 'sushi', name: 'Rainbow Roll', price: 199, rating: 4.9, time: '30-40 min', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop', restaurant: 'Sushi Master' },
  { id: 's8', categoryId: 'sushi', name: 'Avocado Cucumber Roll', price: 150, rating: 4.4, time: '15-20 min', image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Sushi' },
  { id: 's9', categoryId: 'sushi', name: 'Teriyaki Chicken Sushi Roll', price: 180, rating: 4.6, time: '25-35 min', image: 'https://images.unsplash.com/photo-1559466273-d95e72debaf8?q=80&w=800&auto=format&fit=crop', restaurant: 'Tokyo Bites' },
  { id: 's10', categoryId: 'sushi', name: 'Eel Avocado Roll', price: 190, rating: 4.7, time: '30-40 min', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', restaurant: 'Ocean Sushi' },
  { id: 's11', categoryId: 'sushi', name: 'Crunchy Spicy Roll', price: 120, rating: 4.8, time: '25-35 min', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop', restaurant: 'Sushi Master' },
  { id: 's12', categoryId: 'sushi', name: 'Salmon Nigiri (6 pcs)', price: 180, rating: 4.9, time: '20-30 min', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=800&auto=format&fit=crop', restaurant: 'Tokyo Bites' },

  // HEALTHY
  { id: 'h1', categoryId: 'healthy', name: 'Grilled Chicken Salad', price: 120, rating: 4.5, time: '20-25 min', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bowl' },
  { id: 'h2', categoryId: 'healthy', name: 'Avocado Toast & Egg', price: 159, rating: 4.8, time: '15-20 min', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop', restaurant: 'Morning Cafe' },
  { id: 'h3', categoryId: 'healthy', name: 'Quinoa Veggie Bowl', price: 100, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bowl' },
  { id: 'h4', categoryId: 'healthy', name: 'Grilled Salmon Salad', price: 150, rating: 4.7, time: '25-30 min', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop', restaurant: 'Fresh Bites' },
  { id: 'h5', categoryId: 'healthy', name: 'Fruit Yogurt Parfait', price: 200, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop', restaurant: 'Morning Cafe' },
  { id: 'h6', categoryId: 'healthy', name: 'Kale & Chickpea Salad', price: 90, rating: 4.4, time: '20-25 min', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop', restaurant: 'Healthy Hub' },
  { id: 'h7', categoryId: 'healthy', name: 'Oatmeal with Fresh Fruits', price: 155, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=800&auto=format&fit=crop', restaurant: 'Morning Cafe' },
  { id: 'h8', categoryId: 'healthy', name: 'Protein Power Bowl', price: 129, rating: 4.8, time: '20-30 min', image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=800&auto=format&fit=crop', restaurant: 'Fit Kitchen' },
  { id: 'h9', categoryId: 'healthy', name: 'Veggie Wrap with Hummus', price: 120, rating: 4.5, time: '15-20 min', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop', restaurant: 'Green Bowl' },
  { id: 'h10', categoryId: 'healthy', name: 'Brown Rice & Grilled Veggies', price: 250, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop', restaurant: 'Healthy Hub' },
  { id: 'h11', categoryId: 'healthy', name: 'Smoothie Bowl (Berry Mix)', price: 130, rating: 4.7, time: '15-20 min', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop', restaurant: 'Fresh Bites' },
  { id: 'h12', categoryId: 'healthy', name: 'Chicken Caesar Light Salad', price: 175, rating: 4.6, time: '20-25 min', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop', restaurant: 'Fit Kitchen' },

  // DESSERTS
  { id: 'd1', categoryId: 'desserts', name: 'Chocolate Lava Cake', price: 150, rating: 4.8, time: '15-20 min', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop', restaurant: 'Sweet Treats' },
  { id: 'd2', categoryId: 'desserts', name: 'Classic Cheesecake', price: 120, rating: 4.7, time: '15-20 min', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop', restaurant: 'Dessert Hub' },
  { id: 'd3', categoryId: 'desserts', name: 'Brownie with Ice Cream', price: 89, rating: 4.9, time: '20-25 min', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop', restaurant: 'Sweet Treats' },
  { id: 'd4', categoryId: 'desserts', name: 'Strawberry Shortcake', price: 129, rating: 4.6, time: '15-20 min', image: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=800&auto=format&fit=crop', restaurant: 'Cake Corner' },
  { id: 'd5', categoryId: 'desserts', name: 'Tiramisu Delight', price: 180, rating: 4.8, time: '20-25 min', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop', restaurant: 'Italian Bites' },
  { id: 'd6', categoryId: 'desserts', name: 'Chocolate Donuts (3 pcs)', price: 99, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop', restaurant: 'Donut World' },
  { id: 'd7', categoryId: 'desserts', name: 'Vanilla Ice Cream Sundae', price: 150, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop', restaurant: 'Ice Cream Hub' },
  { id: 'd8', categoryId: 'desserts', name: 'Red Velvet Cake Slice', price: 109, rating: 4.7, time: '15-20 min', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop', restaurant: 'Cake Corner' },
  { id: 'd9', categoryId: 'desserts', name: 'Mango Mousse', price: 139, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop', restaurant: 'Fresh Desserts' },
  { id: 'd10', categoryId: 'desserts', name: 'Caramel Custard', price: 120, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=80₀&auto=format&fit=crop', restaurant: 'Dessert Hub' },
  { id: 'd11', categoryId: 'desserts', name: 'Chocolate Chip Cookies (4 pcs)', price: 109, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop', restaurant: 'Sweet Treats' },
  { id: 'd12', categoryId: 'desserts', name: 'Banana Caramel Pancakes', price: 99, rating: 4.7, time: '15-20 min', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop', restaurant: 'Morning Cafe' },

  // DRINKS
  { id: 'dr1', categoryId: 'drinks', name: 'Cold Coffee', price: 10, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop', restaurant: 'Cafe Brew' },
  { id: 'dr2', categoryId: 'drinks', name: 'Fresh Orange Juice', price: 180, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop', restaurant: 'Juice Bar' },
  { id: 'dr3', categoryId: 'drinks', name: 'Chocolate Milkshake', price: 120, rating: 4.7, time: '10-15 min', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop', restaurant: 'Shake Hub' },
  { id: 'dr4', categoryId: 'drinks', name: 'Strawberry Smoothie', price: 150, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop', restaurant: 'Fresh Bites' },
  { id: 'dr5', categoryId: 'drinks', name: 'Lemon Iced Tea', price: 99, rating: 4.4, time: '10-15 min', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop', restaurant: 'Cafe Brew' },
  { id: 'dr6', categoryId: 'drinks', name: 'Mango Shake', price: 500, rating: 4.7, time: '10-15 min', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=800&auto=format&fit=crop', restaurant: 'Juice Bar' },
  { id: 'dr7', categoryId: 'drinks', name: 'Cappuccino', price: 89, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop', restaurant: 'Cafe Brew' },
  { id: 'dr8', categoryId: 'drinks', name: 'Green Detox Juice', price: 99, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop', restaurant: 'Healthy Hub' },
  { id: 'dr9', categoryId: 'drinks', name: 'Blueberry Smoothie', price: 109, rating: 4.7, time: '10-15 min', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop', restaurant: 'Shake Hub' },
  { id: 'dr10', categoryId: 'drinks', name: 'Vanilla Milkshake', price: 100, rating: 4.6, time: '10-15 min', image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?q=80&w=800&auto=format&fit=crop', restaurant: 'Sweet Treats' },
  { id: 'dr11', categoryId: 'drinks', name: 'Watermelon Juice', price: 90, rating: 4.5, time: '10-15 min', image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=800&auto=format&fit=crop', restaurant: 'Juice Bar' },
  { id: 'dr12', categoryId: 'drinks', name: 'Caramel Latte', price: 70, rating: 4.7, time: '10-15 min', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop', restaurant: 'Cafe Brew' },
];

export const popularFoods: FoodItemType[] = allFoods.filter(f => ['p1', 'b1', 's1', 'h1', 'd1', 'p2', 's2', 'b2'].includes(f.id));

export const reviews = [
  {
    id: 'r1',
    user: 'Sarah M.',
    rating: 5,
    comment: 'The food was hot and incredibly delicious! Delivery was super fast.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'r2',
    user: 'David K.',
    rating: 4,
    comment: 'Great selection of restaurants. The tracking feature is very accurate.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 'r3',
    user: 'Emily R.',
    rating: 5,
    comment: 'HungerHubs is my go-to for weekend dinners. Never disappointed!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
  }
];
