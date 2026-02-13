import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const categories = [
    "Beer",
    "Cognac",
    "Whiskey & Tennessee",
    "Tequila",
    "Rum",
    "Wine",
    "Champagne",
    "Cocktails",
    "Bitter",
    "Soft Drinks",
    "Mocktails",
    "Shots",
    "Cream",
    "Energy Drinks",
];

const menuData: Record<string, { name: string; price: string }[]> = {
    Beer: [
        { name: "Small Stout", price: "₦1500" },
        { name: "Big Stout", price: "₦2300" },
        { name: "Budweiser", price: "₦1500" },
        { name: "Legend", price: "₦1500" },
        { name: "33", price: "₦1400" },
        { name: "Truboking", price: "₦1500" },
        { name: "Desperado", price: "₦1400" },
        { name: "Heineken", price: "₦1800" },
        { name: "Flying Fish", price: "₦1200" },
        { name: "Trophy", price: "₦1400" },
        { name: "Goldberg", price: "₦1400" },
        { name: "Goldberg Black", price: "₦1200" },
        { name: "Big Ice", price: "₦1800" },
        { name: "Small Ice", price: "₦1400" },
        { name: "Castlelite", price: "₦1500" },
        { name: "Star Radler", price: "₦1300" },
    ],

    Cognac: [
        { name: "Hennessy", price: "₦90,000" },
        { name: "Hennessy VSOP", price: "₦160,000" },
        { name: "Martel", price: "₦80,000" },
        { name: "Martel Blue Swift", price: "₦150,000" },
        { name: "Martel XO", price: "₦590,000" },
        { name: "Remy Martin XO", price: "₦520,000" },
    ],

    "Whiskey & Tennessee": [
        { name: "Jameson Black Barrel", price: "₦69,000" },
        { name: "Jameson", price: "₦45,000" },
        { name: "Jack Daniel’s Old No.7", price: "₦45,000" },
        { name: "John Walker", price: "₦25,000" },
        { name: "William Lawson", price: "₦25,000" },
        { name: "Best Whiskey", price: "₦10,000" },
        { name: "Best Whiskey (Small)", price: "₦3,000" },
        { name: "Gordon", price: "₦15,000" },
        { name: "Gordon (Small)", price: "₦5,000" },
        { name: "Jack William", price: "₦15,000" },
        { name: "Lacoco", price: "₦1,500"}
    ],

    Tequila: [
        { name: "Don Julio", price: "₦450,000" },
        { name: "Clase Azul", price: "₦290,000" },
        { name: "Azul Reposado", price: "₦450,000" },
        { name: "Casamigos", price: "₦200,000" },
        { name: "Tequila Silver", price: "₦40,000" },
        { name: "Sierra Reposado", price: "₦30,000" },
        { name: "Sierra", price: "₦25,000" },
    ],

    Rum: [
        { name: "Bacardi", price: "₦35,000" },
        { name: "Captain Morgan", price: "₦35,000" },
    ],

    Wine: [
        { name: "Natural Sweet Red Wine", price: "₦15,000" },
        { name: "Baron the Walls", price: "₦12,000" },
        { name: "Premium House Wine", price: "₦15,000" },
        { name: "Valeta", price: "₦10,000" },
        { name: "Four Cousin", price: "₦17,000" },
    ],

    Champagne: [
        { name: "Moet & Chandon", price: "₦150,000" },
        { name: "Andre", price: "₦30,000" },
    ],

    Cocktails: [
        { name: "Long Island", price: "₦7,000" },
        { name: "Blue Island", price: "₦7,000" },
        { name: "Gin & Tonic", price: "₦8,000" },
        { name: "Virgin Mojito", price: "₦7,000" },
        { name: "Sex on the Beach", price: "₦8,000" },
        { name: "Sangria", price: "₦8,000" },
    ],

    Bitter: [
        { name: "Origin Bitters (Small)", price: "₦2,000" },
        { name: "Long Jack (Small)", price: "₦2,000" },
    ],

    "Soft Drinks": [
        { name: "Water", price: "₦500" },
        { name: "Malt", price: "₦1,000" },
        { name: "Chivita", price: "₦3,000" },
        { name: "Hollandia", price: "₦3,500" },
        { name: "Coke", price: "₦1,000" },
        { name: "Fanta", price: "₦1,000" },
        { name: "Sprite", price: "₦1,000" },
    ],

    Mocktails: [{ name: "Chapman", price: "₦5,000" }],

    Shots: [
        { name: "Gin", price: "₦2,000" },
        { name: "Tequila", price: "₦3,500" },
    ],

    Cream: [{ name: "Best Cream", price: "₦4,000" }],

    "Energy Drinks": [
        { name: "Bullet", price: "₦3,500" },
        { name: "Monster", price: "₦2,500" },
    ],
};

export default function LoungeMenu() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (category: string) => {
        setOpenCategory((prev) => (prev === category ? null : category));
    };

    return (
        <div className="min-h-screen  text-yellow-300 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold  mb-5 ml-1 text-yellow-400">
                Lounge Price List
            </h1>

            <div className="space-y-4">
                {categories.map((category) => {
                    const isOpen = openCategory === category;

                    return (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            key={category}
                            className="border border-zinc-700 rounded-xl overflow-hidden bg-gray-100"
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex justify-between items-center p-5 bg-blue-950 hover:bg-zinc-800 transition"
                            >

                                <span className="text-lg font-semibold">{category}</span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown />
                                </motion.div>
                            </button>

                            {/* Dropdown Content */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-zinc-800"
                                    >
                                        <div className="p-4 space-y-3">
                                            {menuData[category]?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-between border-b border-zinc-700 pb-2"
                                                >
                                                    <span>{item.name}</span>
                                                    <span className="text-yellow-400 font-semibold">
                                                        {item.price}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
