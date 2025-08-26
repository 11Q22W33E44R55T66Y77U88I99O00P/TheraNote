import React from "react";
import { motion } from "framer-motion";

export default function LoadingBar({ className = "" }) {
  return (
    <div className={`w-48 h-1 bg-emerald-100 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full"
        initial={{ width: "0%", x: "-100%" }}
        animate={{ 
          width: "100%",
          x: "0%"
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </div>
  );
}