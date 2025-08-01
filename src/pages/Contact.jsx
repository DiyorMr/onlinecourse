import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-50 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Contact Info with Logo */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-md text-white font-bold text-lg">
                S
              </div>
              <a href="#home">
                <span className="text-base font-semibold text-gray-800">Skillbridge</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@skillbridge.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 91813 23 2309</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Somewhere in the World</span>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <a href="#home">
              <h3 className="font-semibold text-gray-800 mb-4">Home</h3>
            </a>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-800 transition">Benefits</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Our Courses</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Our Testimonials</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Our FAQ</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <a href="#home">
              <h3 className="font-semibold text-gray-800 mb-4">About us</h3>
            </a>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-800 transition">Company</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Achievements</a></li>
              <li><a href="#" className="hover:text-gray-800 transition">Our Goals</a></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Social Profiles</h3>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="text-center text-gray-400 text-xs mt-12 pt-6 border-t">
          © 2023 Skillbridge. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
