// src/data/menuData.js

export const menuData = [
    // --- MOMOS ---
    {
        id: "momo-1",
        name: "Chicken Steam Momo",
        category: "Momos",
        price: 60,
        pcs: "5 Pcs",
        image: "/images/menu/steam-momo.jpg", // Placeholder path
        bestseller: true, // Tagged for Home Slider
        description: "Classic steamed dumplings filled with juicy chicken."
    },
    {
        id: "momo-2",
        name: "Chicken Fried Momo",
        category: "Momos",
        price: 75,
        pcs: "5 Pcs",
        image: "/images/menu/fried-momo.jpg",
        bestseller: false,
    },
    {
        id: "momo-3",
        name: "Chicken Pan Fried Momo",
        category: "Momos",
        price: 75,
        pcs: "5 Pcs",
        image: "/images/menu/pan-fried.jpg",
        bestseller: false,
    },
    {
        id: "momo-4",
        name: "Chicken Chilli Momo",
        category: "Momos",
        price: 80,
        pcs: "5 Pcs",
        image: "/images/menu/chilli-momo.jpg",
        bestseller: false,
    },
    {
        id: "momo-5",
        name: "Paneer Capsicum Fried Momo",
        category: "Momos",
        price: 60,
        pcs: "5 Pcs",
        image: "/images/menu/paneer-momo.jpg",
        bestseller: false,
    },

    // --- ROLLS ---
    {
        id: "roll-1",
        name: "Egg Roll",
        category: "Rolls",
        price: 50,
        image: "/images/menu/egg-roll.jpg",
        bestseller: false,
    },
    {
        id: "roll-2",
        name: "Chicken Roll",
        category: "Rolls",
        price: 70,
        image: "/images/menu/chicken-roll.jpg",
        bestseller: true,
    },
    {
        id: "roll-3",
        name: "Egg Chicken Roll",
        category: "Rolls",
        price: 80,
        image: "/images/menu/egg-chicken-roll.jpg",
        bestseller: false,
    },

    // --- NON VEG SNACKS (Complex Pricing Logic) ---
    {
        id: "snack-1",
        name: "Chicken Nuggets",
        category: "Non-Veg Snacks",
        // Handling the 8/4 pcs logic from the menu image
        price: {
            full: 195,
            half: 110
        },
        variantLabels: {
            full: "8 Pcs",
            half: "4 Pcs"
        },
        image: "/images/menu/nuggets.jpg",
        bestseller: false,
    },
    {
        id: "snack-2",
        name: "Chicken Lollipop",
        category: "Non-Veg Snacks",
        price: {
            full: 160,
            half: 90
        },
        variantLabels: {
            full: "4 Pcs",
            half: "2 Pcs"
        },
        image: "/images/menu/lollipop.jpg",
        bestseller: true,
    },
    {
        id: "snack-3",
        name: "Crispy Chicken Wings",
        category: "Non-Veg Snacks",
        price: 90,
        pcs: "2 Pcs",
        image: "/images/menu/wings.jpg",
        bestseller: false,
    },
    {
        id: "snack-4",
        name: "Fish Fry",
        category: "Non-Veg Snacks",
        price: 125,
        pcs: "2 Pcs",
        image: "/images/menu/fish-fry.jpg",
        bestseller: false,
    },

    // --- CHINESE STARTER ---
    {
        id: "chinese-1",
        name: "Chili Chicken",
        category: "Chinese Starter",
        price: 145,
        pcs: "10 Pcs",
        image: "/images/menu/chili-chicken.jpg",
        bestseller: false,
    },
    {
        id: "chinese-2",
        name: "Dragon Chicken",
        category: "Chinese Starter",
        price: 155,
        pcs: "10 Pcs",
        image: "/images/menu/dragon-chicken.jpg",
        bestseller: false,
    },

    // --- HAKKA NOODLES ---
    {
        id: "noodle-1",
        name: "Veg Hakka Noodles",
        category: "Noodles",
        price: 110,
        image: "/images/menu/veg-hakka.jpg",
        bestseller: false,
    },
    {
        id: "noodle-2",
        name: "Chicken Pasta in White Sauce",
        category: "Noodles",
        price: 150,
        image: "/images/menu/white-sauce-pasta.jpg",
        bestseller: false,
    },

    // --- CHINESE COMBO ---
    {
        id: "combo-1",
        name: "Mixed Fried Rice & Chilli Chicken",
        category: "Combos",
        price: 190,
        pcs: "6 Pcs Chicken",
        image: "/images/menu/combo.jpg",
        bestseller: true,
    },

    // --- BEVERAGES (Coffee, Shakes, Mocktails) ---
    {
        id: "bev-1",
        name: "Cold Coffee with Ice Cream",
        category: "Beverages",
        price: 80,
        image: "/images/menu/cold-coffee.jpg",
        bestseller: true,
    },
    {
        id: "bev-2",
        name: "Brownie Shake",
        category: "Beverages",
        price: 85,
        image: "/images/menu/brownie-shake.jpg",
        bestseller: false,
    },
    {
        id: "bev-3",
        name: "Blue Lagoon",
        category: "Mocktails",
        price: 70,
        image: "/images/menu/blue-lagoon.jpg",
        bestseller: false,
    },
    {
        id: "bev-4",
        name: "Mango Lassi",
        category: "Lassi",
        price: 70,
        image: "/images/menu/mango-lassi.jpg",
        bestseller: false,
    }
];

export const categories = [
    "Momos", "Rolls", "Non-Veg Snacks", "Chinese Starter", "Noodles", "Combos", "Beverages", "Mocktails", "Lassi"
];