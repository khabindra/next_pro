import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            Restaurant<span className="text-orange-500">Name</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/menu" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Menu
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Gallery
            </Link>
            <Link 
              href="/reservation" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Reservation
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
