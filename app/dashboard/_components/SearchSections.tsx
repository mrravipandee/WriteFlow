'use client'

import { Search, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

interface SearchSectionsProps {
  onSearchInput: (value: string) => void
}

const SearchSections = ({ onSearchInput }: SearchSectionsProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const popularSearches = ['Email', 'Blog Post', 'Social Media', 'Code', 'Resume', 'Grammar']

  return (
    <div className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5142b5] via-[#6b46c1] to-[#4338ca] animate-gradient-shift"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#907ce9] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5142b5] rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 p-6 md:p-12 lg:p-16 flex flex-col justify-center items-center text-white">
        <div className="text-center max-w-4xl">
          {/* Animated header */}
          <div className="inline-flex items-center mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 mr-2 text-yellow-200" />
            <span className="text-sm font-medium">30+ AI-Powered Templates</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
            Discover Your Perfect Template
          </h2>
          <p className="text-lg md:text-xl text-purple-100/90 max-w-2xl mx-auto">
            What would you like to create today? Find exactly what you need in seconds.
          </p>

          {/* Enhanced search bar with floating effect */}
          <div className={`relative mt-10 mb-6 w-full max-w-2xl mx-auto transition-all duration-500 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
            <div
              className={`flex items-center p-4 rounded-xl bg-white/10 backdrop-blur-lg border-2 transition-all duration-300 ${isFocused ? 'border-white/40 shadow-lg' : 'border-white/20 shadow-md'
                }`}
            >
              <Search className="text-purple-200 mr-3 flex-shrink-0" size={22} />
              <input
                type="text"
                placeholder="Search templates (e.g., 'professional email', 'React component', 'blog outline')"
                onChange={(e) => onSearchInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="bg-transparent w-full outline-none text-white placeholder-purple-200/70 text-lg md:text-xl"
              />
            </div>

            {/* Floating search indicator when focused */}
            {isFocused && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white/60 animate-pulse">
                Press Enter to search
              </div>
            )}
          </div>

          {/* Popular searches with hover effects */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {popularSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  onSearchInput(tag)
                  // Add slight animation feedback
                  const btn = document.getElementById(`tag-${tag}`)
                  btn?.classList.add('scale-90')
                  setTimeout(() => btn?.classList.remove('scale-90'), 150)
                }}
                id={`tag-${tag}`}
                className="px-5 py-2.5 bg-white/5 hover:bg-white/20 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center group"
              >
                <span>{tag}</span>
                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated gradient background style */}
      <style jsx>{`
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </div>
  )
}

export default SearchSections