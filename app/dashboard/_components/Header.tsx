'use client'

import { UserButton } from '@clerk/nextjs'
import { Search, Menu, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-[#5142b5]" />
                <span className="ml-2 text-xl font-semibold text-gray-800">WriteFlow</span>
              </div>
            </div>

            {/* Search Bar - Takes full width on mobile */}
            <div className="relative flex-1 max-w-2xl">
              <div className="flex items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#5142b5] focus-within:border-transparent transition-all duration-200">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates, docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Right Side - User Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Membership Badge - Hidden on small mobile */}
              <div className="hidden xs:flex items-center">
                <div className="bg-gradient-to-r from-[#5142b5] to-[#907ce9] text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                  <span className="hidden sm:inline">Join for </span>₹109/3mo
                </div>
              </div>

              {/* User Button */}
              <div className="ml-2">
                <UserButton afterSignOutUrl="/" />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed top-16 right-0 w-64 bg-white shadow-lg rounded-l-lg transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">Account</span>
                <UserButton afterSignOutUrl="/" />
              </div>
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  Dashboard
                </a>
                <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  Templates
                </a>
                <a href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md">
                  History
                </a>
                <div className="pt-2 border-t border-gray-100">
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#5142b5] to-[#907ce9] text-white text-sm font-medium rounded-md shadow-sm">
                    Upgrade Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header