import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnimatedSection = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }} // Only animate once
    className={cn("py-16", className)}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </motion.section>
);

export default AnimatedSection;
