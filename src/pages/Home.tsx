import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "././../../public/logo.png"

const Home = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [activeSection, setActiveSection] = useState<"lounge" | "travels">("lounge");
    const navigate = useNavigate()

    const handleNo = () => {
        toast.error("You must be 18 or older to access this content.");
    };

    const handleYes = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsVerified(true);
            setIsLoading(false);
            toast.success("Welcome! You are verified as 18 or older.");
        }, 2000);
    };

    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
            {/* 18+ Age Gate */}
            <AnimatePresence>
                {!isVerified && !isLoading && (
                    <motion.div
                        className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-5 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-lg max-w-sm text-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                className="mb-4"
                            >
                                <circle cx="32" cy="32" r="30" fill="#D32F2F" />
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="28"
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="3"
                                />
                                <text
                                    x="32"
                                    y="38"
                                    textAnchor="middle"
                                    fontSize="24"
                                    fontWeight="700"
                                    fontFamily="Arial, Helvetica, sans-serif"
                                    fill="#FFFFFF"
                                >
                                    18+
                                </text>
                            </svg>

                            <h2 className="text-2xl font-bold text-gray-800">Are you 18 or older?</h2>
                            <p className="text-gray-600 mb-4">You must be 18+ to view this content.</p>

                            <div className="flex flex-col gap-3 w-full">
                                <button
                                    onClick={handleYes}
                                    className="bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                                >
                                    Yes, I am 18+
                                </button>
                                <button
                                    onClick={handleNo}
                                    className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
                                >
                                    No, I am not 18
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading Spinner */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-20 h-20 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence>
                {/* Logo Top Left */}
                <div className="absolute top-6 left-6">
                    <img src={logo} alt="Myt Lounge Logo" className="h-16 w-auto" />
                </div>

                {isVerified && !isLoading && (
                    <motion.div
                        className="flex flex-col items-left w-full max-w-4xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl text-blue-950 mb-6 font-bold">
                            Welcome to <br /> <span className="text-yellow-400">Myt Lounge 🍻</span>
                        </h1>

                        {/* Section Tabs */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setActiveSection("lounge")}
                                className={`px-4 py-2 animate-bounce rounded-lg font-semibold transition ${activeSection === "lounge"
                                    ? "bg-blue-950 text-yellow-200"
                                    : "bg-yellow-200 text-blue-950 hover:bg-gray-300"
                                    }`}
                            >
                                Click here ⮟

                            </button>

                        </div>

                        {/* Cards for Each Section */}
                        {/* Cards */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Price Listing */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                onClick={() => navigate("/price-listing")}
                                className="bg-blue-950 p-6 rounded-xl shadow-md cursor-pointer"
                            >
                                <h2 className="text-xl font-bold mb-2 text-yellow-300">
                                    Price Listings
                                </h2>
                                <p className="text-yellow-300">
                                    Check out our drinks, cocktails, and lounge pricing.
                                </p>
                            </motion.div>

                            {/* Events & Promotions */}
                            {/* Events & Promotions (Disabled) */}
                            <motion.div
                                className="bg-yellow-200 p-6 rounded-xl shadow-md opacity-50 cursor-not-allowed relative"
                            >
                                <h2 className="text-xl font-bold mb-2 text-blue-950">
                                    Events & Promotions
                                </h2>
                                <p className="text-blue-950">
                                    Stay updated with our latest events and special offers.
                                </p>

                                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                                    Coming Soon
                                </span>
                            </motion.div>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
