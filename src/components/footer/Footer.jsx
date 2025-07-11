import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import SocialLink from "./SocialLink";
import LinkSection from "./LinkSection";
import ContactItem from "./ContantItem";

const Footer = () => {
  const quickLinks = [
    { href: "#", text: "Dashboard" },
    { href: "#", text: "Posts" },
    { href: "#", text: "Users" },
    { href: "#", text: "Analytics" },
    { href: "#", text: "Settings" }
  ];

  const supportLinks = [
    { href: "#", text: "Documentation" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Help Center" },
    { href: "#", text: "Contact Support" },
    { href: "#", text: "System Status" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white mt-16 transition-all duration-300">
      <div className=" px-6 py-12">
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
              <SocialLink href="#" icon={Twitter} />
              <SocialLink href="#" icon={Github} />
              <SocialLink href="#" icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <LinkSection title="Quick Links" links={quickLinks} />

          {/* Support */}
          <LinkSection title="Support" links={supportLinks} />

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <ContactItem icon={Mail}>support@forumflow.com</ContactItem>
              <ContactItem icon={Phone}>+1 (555) 123-4567</ContactItem>
              <ContactItem icon={MapPin}>San Francisco, CA</ContactItem>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
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
};

export default Footer;