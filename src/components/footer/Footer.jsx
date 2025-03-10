import { ChevronRight, Facebook, Linkedin, Instagram, Youtube,  } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full mt-10 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center">
            <svg
              width="40"
              height="46"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-10 md:h-10"
            >
              {/* Your SVG path here */}
            </svg>
            <span className="ml-4 text-lg text-red-500 italic font-bold uppercase">Desiqna</span>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            {/* Social media icons */}
            <a href  ="https://www.Facebook.com/company/desiqna/"> <Facebook size={24} color="#3b5998" /></a>
            <a href ="https://www.linkedin.com/company/desiqna/"><Linkedin size={24} color="#0077b5" /></a>
            <a href ="https://www.instagram.com/desiqna_official/"><Instagram size={24} color="#e4405f" /></a>
            <a href="https://youtu.be/0S7WMSpR36o?si=JcdnYirmqJBJbigg"><Youtube size={24} color="#ff0000" /></a>
            <a href="https://www.desiqna.in/refund-policy"><p>Refund Policy </p></a>
            <a href="https://www.desiqna.in/refund-policy"><p>CopyRight  Policy</p></a>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">© 2025 DesiQna. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
