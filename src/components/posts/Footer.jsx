import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img 
            src="/forumflow.svg" 
            alt="ForumFlow Logo" 
            className="w-8 h-8 object-contain"
            onError={(e) => {
                console.log('Logo failed to load, trying alternative path');
                e.target.src = './forumflow.svg';
            }}
            />
            <h3 className="text-2xl font-bold">Forum Flow</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Streamline your forum management with our powerful, intuitive platform. 
            Built for communities that matter.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Dashboard</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Posts</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Users</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Analytics</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Settings</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Documentation</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">API Reference</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Support</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">System Status</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">support@forumflow.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-300 text-sm">San Francisco, CA</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4 md:mb-0">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>by Ege Yardımcı</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
          <span>&copy; 2024 ForumFlow. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;