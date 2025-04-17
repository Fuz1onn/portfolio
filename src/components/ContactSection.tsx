import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => (
  <AnimatedSection id="contact" className="bg-gray-900">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-300 text-lg mb-6">
          Feel free to reach out to me for any questions or opportunities.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-cyan-400" />
            <a
              href="mailto:khalilacebuche17@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              khalilacebuche17@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-purple-400" />
            <a
              href="https://www.linkedin.com/in/khalil-scythe-acebuche-505045257" // Replace with actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="w-6 h-6 text-white" />
            <a
              href="https://github.com/Fuz1onn" // Replace
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div>
        <form className="space-y-6">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Textarea
            placeholder="Your Message"
            className="bg-gray-800 border-gray-700 text-white"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </AnimatedSection>
);

export default ContactSection;
