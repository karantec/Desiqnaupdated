import { Facebook, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';

 function Footer() {
  const socialLinks = [
    { href: "https://www.facebook.com/company/desiqna/", icon: Facebook, color: "#3b5998", label: "Facebook" },
    { href: "https://www.linkedin.com/company/desiqna/", icon: Linkedin, color: "#0077b5", label: "LinkedIn" },
    { href: "https://www.instagram.com/desiqna_official/", icon: Instagram, color: "#e4405f", label: "Instagram" },
    { href: "https://youtu.be/0S7WMSpR36o?si=JcdnYirmqJBJbigg", icon: Youtube, color: "#ff0000", label: "YouTube" }
  ];

  const policyLinks = [
    { href: "https://www.desiqna.in/refund-policy", label: "Refund Policy" },
    { href: "https://www.desiqna.in/copyright-policy", label: "Copyright Policy" }
  ];

  return (
    <footer className="w-full mt-16 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center group">
              <div className="bg-red-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path d="M25 0L50 14V42L25 56L0 42V14L25 0Z" fill="currentColor" />
                </svg>
              </div>
              <span className="ml-3 text-2xl text-red-500 italic font-bold uppercase tracking-wide">
                Desiqna
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Crafting innovative design solutions that bring your vision to life with creativity and precision.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start md:items-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Connect With Us</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} color={social.color} className="group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {policyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-red-500 transition-colors duration-200 flex items-center gap-1 group"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2025 <span className="font-semibold text-gray-700">DesiQna</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Made with <span className="text-red-500">♥</span> by Coding Ditto
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;