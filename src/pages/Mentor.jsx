import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"
import AboutLayout from "../components/Layouts/MentorLayout";

const Mentor = () => {
    const variants = {
        hidden: { opacity: 0, x: -100 },  // Initial state (hidden off to the left)
        visible: { opacity: 1, x: 0 },    // Final state (visible and centered)
      };
 return(
    <>
    <Navbar bgColor="bg-customColor" />
    {/* Motion.div to apply animations */}
    <motion.div
      initial="hidden"              // Start from the hidden variant
      animate="visible"             // Animate to the visible variant
      variants={variants}           // Apply the variants
      transition={{ duration: 1 }}  // Define the animation duration
      className=""                  // Additional class names (if any)
    >
      
      <AboutLayout />
    </motion.div>
  </>
);
};

export default Mentor;