const Header = () => (
  <header className="py-6">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="#" className="text-2xl font-bold text-white">
        &lt;Khalil /&gt;
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu (simplified for this example) */}
      <div className="md:hidden">
        <a
          href="#contact"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  </header>
);

export default Header;
