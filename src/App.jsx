import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, Info, Package, Leaf, FileText, Phone, 
  Instagram, Facebook, Linkedin, MapPin, Mail, 
  Award, User, ArrowRight
} from 'lucide-react';

const DryloCreativeWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Catchpy Phrases
  const catchyPhrases = [
    "Nature's Treasure, Delivered to Your Door",
    "Organic Goodness from the Heart of Madhya Pradesh",
    "Pure. Sustainable. Delicious."
  ];

  // Product Details
  const products = [
    {
      id: 'charoli',
      name: 'Charoli/Chironji',
      tagline: 'The Hidden Gem of Patalkot',
      description: 'Rare, nutritious nuts sourced from pristine forests',
      benefits: [
        'Rich in Antioxidants',
        'Boosts Immunity',
        'Natural Skin Glow'
      ],
      origin: 'Patalkot, Chhindwara',
      image: '/uploads/three.jpg'
    },
    {
      id: 'almonds',
      name: 'Organic Almonds',
      tagline: 'Crunch of Wellness',
      description: 'Premium almonds cultivated with love and care',
      benefits: [
        'Heart-Healthy Nutrients',
        'Brain Boost',
        'Weight Management'
      ],
      origin: 'Madhya Pradesh Farms',
      image: '/uploads/four.jpg'
    }
  ];

  // Company Details
  const companyInfo = {
    name: 'Drylo India',
    msmeId: 'UDYAM-MP-13-0040261',
    address: {
      full: 'Singodi, Chhindwara, Madhya Pradesh - 480223',
      coordinates: {
        latitude: '22.0697° N',
        longitude: '78.9290° E'
      }
    },
    contact: {
      phone: '+91 7987145801',
      email: 'contact@drylo.in'
    }
  };

  // Render Methods
  const renderHeader = () => (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center ">
          <img 
            src="/uploads/DryloLOGO.png" 
            alt="" 
            className="h-20 w-15"
          />
          <div>
            <h1 className="text-2xl font-bold text-green-800">Drylo India</h1>
            <p className="text-xs text-green-600">MSME Certified Organic Delights</p>
          </div>
        </div>
        <nav className="flex space-x-4">
          {[
            { label: 'Home', icon: <Home /> },
            { label: 'Products', icon: <Package /> },
            { label: 'About', icon: <Info /> },
            { label: 'Contact', icon: <Phone /> }
          ].map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-green-700 hover:text-green-900"
            >
              {item.icon}
              <span className="hidden md:block">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );

  const renderHeroSection = () => (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-green-300">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-900">
            {catchyPhrases[0]}
          </h2>
          <p className="text-lg text-green-700">
            Discover organic dry fruits straight from the pristine forests of Patalkot
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700"
          >
            <span>Explore Our Roots</span>
            <ArrowRight />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img 
            src="/uploads/two.jpg" 
            alt="Organic Dry Fruits" 
            className="w-50 h-50 rounded-full shadow-xl border-8 border-white"
          />
        </motion.div>
      </div>
    </div>
  );

  const renderProductSection = () => (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
          Our Organic Treasures
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-green-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  {product.name}
                </h4>
                <p className="text-green-600 italic mb-4">{product.tagline}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-700 flex items-center">
                      <MapPin className="mr-2 text-green-600" size={16} />
                      {product.origin}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="bg-green-100 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
          Connect with Drylo India
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h4 className="text-2xl font-bold text-green-800 mb-6">
              Our Location
            </h4>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-3 text-green-600" />
                <span>{companyInfo.address.full}</span>
              </p>
              <p className="flex items-center">
                <Award className="mr-3 text-green-600" />
                <span>MSME ID: {companyInfo.msmeId}</span>
              </p>
              <div className="flex items-center">
                <User className="mr-3 text-green-600" />
                <span>Coordinates: {companyInfo.address.coordinates.latitude}, {companyInfo.address.coordinates.longitude}</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h4 className="text-2xl font-bold text-green-800 mb-6">
              Contact Information
            </h4>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-3 text-green-600" />
                <span>{companyInfo.contact.phone}</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-green-600" />
                <span>{companyInfo.contact.email}</span>
              </p>
              <div className="flex space-x-4 mt-6">
                {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-green-50 min-h-screen">
      {renderHeader()}
      <main className="pt-16">
        {renderHeroSection()}
        {renderProductSection()}
        {renderContactSection()}
      </main>
    </div>
  );
};

export default DryloCreativeWebsite;