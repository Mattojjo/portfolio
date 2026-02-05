export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="bg-gray-100 px-6 py-3 rounded-2xl neu-shadow inline-block mb-4">
              <h3 className="text-2xl font-bold text-gray-800">LS</h3>
            </div>
            <p className="text-gray-600">
              Software Engineer with a passion for building exceptional digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-600 hover:text-orange-500 transition">Home</a>
              <a href="#about" className="block text-gray-600 hover:text-orange-500 transition">About</a>
              <a href="#services" className="block text-gray-600 hover:text-orange-500 transition">Services</a>
              <a href="#work" className="block text-gray-600 hover:text-orange-500 transition">Work</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center neu-flat hover:neu-shadow hover:scale-110 transition-all duration-300 text-gray-700">
                <span>in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center neu-flat hover:neu-shadow hover:scale-110 transition-all duration-300 text-gray-700">
                <span>gh</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center neu-flat hover:neu-shadow hover:scale-110 transition-all duration-300 text-gray-700">
                <span>tw</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          <p>&copy; 2026 Leinad Suarez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
