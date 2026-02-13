import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png"
import { ArrowBigDown } from "lucide-react";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const handleNavigate = () => {
        setIsLoading(true)
        setTimeout(() => {
            navigate("/price-listing")
        }, 5000)
    }



    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">

            {/* Loading Spinner */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="w-20 h-20 border-4 border-t-yellow-300 border-gray-950 rounded-full animate-spin"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence>
                {/* Logo Top Left */}
                <div className="absolute top-6 left-6">
                    <img src={logo} alt="Myt Lounge Logo" className="h-16 w-auto animate-pulse" />
                </div>

                {!isLoading && (
                    <motion.div
                        className="flex flex-col items-left w-full max-w-4xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl text-blue-950 mb-6 font-bold">
                            <span className="text-5xl">Welcome</span> to <br /> <span className="text-yellow-400">Myt Lounge🍻</span>
                        </h1>

                        {/* Section Tabs */}
                        <div className="flex gap-4 mb-8">
                            <button className="px-4 py-2 bg-blue-950 rounded-md animate-bounce text-yellow-300">
                                Click here
                                <ArrowBigDown className="inline ml-1 w-4 h-4" />

                            </button>

                        </div>

                        {/* Cards for Each Section */}

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Price Listing */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                onClick={handleNavigate}
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
