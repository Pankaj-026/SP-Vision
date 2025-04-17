import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">SP Vision</h3>
              <p className="text-gray-400">Your ultimate destination for movies and TV series streaming.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-amber-400">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">Movies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">TV Series</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">New Releases</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-amber-400">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-amber-400">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <Facebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <Twitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SP Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
