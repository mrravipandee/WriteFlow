'use client'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function page() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl text-center animate-fadeSlide">
        <Link href={"https://imravidev.vercel.app"} className="border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-white-400 dark:text-gray-300 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400" >Developer @ Ravi Pandey</Link>
        <div className="flex justify-center mb-6">

          {/* Floating AI SVG Icon */}
          <svg
            className="w-20 h-20 text-[#5142b5] animate-float"
            fill="none"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" fill="#907ce9" />
            <path d="M100 50 L130 90 L100 130 L70 90 Z" fill="white" />
            <circle cx="100" cy="100" r="8" fill="#5142b5" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#5142b5] mb-4">
          Where Words <span className="text-[#907ce9]">Meet Intelligence.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          WriteFlow helps you turn thoughts into powerful content using AI. Stay creative, focused, and always in flow.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-[#5142b5] hover:bg-[#3f34a4] text-white px-6 py-3 rounded-full font-semibold shadow transition flex gap-4"
          >
            Get Started <MoveRight />
          </Link>

        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlide {
          animation: fadeSlide 1s ease-out both;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
