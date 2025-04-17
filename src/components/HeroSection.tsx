import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => (
  <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
      >
        Hi, I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Khalil Scythe Acebuche
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        I&apos;m a{" "}
        <span className="text-cyan-400">Full-Stack Web Developer</span>{" "}
        passionate about creating impactful and user-friendly web applications.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex justify-center gap-4"
      >
        <Button
          variant="outline"
          size="lg"
          className="text-white hover:bg-white/10 border-cyan-500/30"
        >
          <a href="#projects" className="flex items-center gap-2">
            View Projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </Button>
        <Button
          variant="default"
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
        >
          <a href="#contact" className="flex items-center gap-2">
            Get in Touch <ArrowUpRight className="w-5 h-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
