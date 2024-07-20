import React from "react";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from "@heroicons/react/solid";
import { motion } from "framer-motion";




const Hero = () => {
    const variants = {
        hidden: { opacity: 0, x: -100 },  // Initial state (hidden off to the left)
        visible: { opacity: 1, x: 0 },    // Final state (visible and centered)
      };
    return (
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between bg-[url('bg3.jpg')] bg-cover bg-center">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto px-4">
            <motion.div
                initial="hidden"              // Start from the hidden variant
                animate="visible"             // Animate to the visible variant
                variants={variants}           // Apply the variants
                transition={{ duration: 1 }}  // Define the animation duration
                className=""                  // Additional class names (if any)
    >
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 my-8 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Studying Online is now much easier
                    </h1>
                    <p className="text-white mt-2 mb-5">
                        Made by <span className="font-semibold">FORTRESS</span>
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="w-40 h-10 bg-blue-500 text-white rounded-md hover:bg-white transition duration-300">
                            Let's go →
                        </button>
                    </div>
                </div>
                </motion.div>
                {/* Add additional content here if needed */}
            </div>
        </div>
    );
};

export default Hero;

