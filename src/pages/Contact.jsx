import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white border-t mt-16 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info with Logo */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2">
            <div className="bg-orange-400 p-2 rounded-md text-white font-bold">S</div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>hello@skillbridge.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">Home</h3>
          <ul className="space-y-2">
            <li>Benefits</li>
            <li>Our Courses</li>
            <li>Our Testimonials</li>
            <li>Our FAQ</li>
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">About Us</h3>
          <ul className="space-y-2">
            <li>Company</li>
            <li>Achievements</li>
            <li>Our Goals</li>
          </ul>
        </div>

        {/* Social Profiles */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">Social Profiles</h3>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs py-4 border-t">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
