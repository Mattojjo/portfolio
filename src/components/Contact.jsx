export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-indigo-100 text-lg">Let's discuss your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:leinad9607@gmail.com" className="text-indigo-100 hover:text-white transition">
                  leinad9607@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">�</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Available For</h3>
                <p className="text-indigo-100">Freelance projects, full-time opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
