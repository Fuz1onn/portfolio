import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <AnimatedSection id="about" className="bg-gray-900/50">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-gray-300 text-xl">
          Hello! I'm Khalil Scythe Acebuche, a recent Information Technology
          graduate from Bulacan State University, specializing in Web and Mobile
          Application Development. I'm driven by a passion for creating
          innovative and impactful software solutions.
        </p>
        <p className="text-gray-300 text-xl mt-4">
          As a highly motivated and creative individual with a strong work
          ethic, I thrive on learning new technologies and tackling challenging
          projects. I'm also a collaborative team player, eager to contribute to
          shared goals.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg overflow-hidden shadow-lg w-120 h-120">
          <img
            src="/images/profile/Profile1.jpg" // Placeholder image
            alt="Khalil Scythe Acebuche"
            className="w-full h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
