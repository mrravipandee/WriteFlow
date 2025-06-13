'use client'

import { MoveRight, Sparkles, Code, Mail, PenTool, BookOpen, Laptop } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#5142b5]" />,
      title: "AI-Powered Writing",
      description: "Generate high-quality content with Google's Generative AI"
    },
    {
      icon: <Code className="w-6 h-6 text-[#5142b5]" />,
      title: "Code Snippets",
      description: "Get programming help with generated code examples"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#5142b5]" />,
      title: "Email Templates",
      description: "Professional emails crafted in seconds"
    },
    {
      icon: <PenTool className="w-6 h-6 text-[#5142b5]" />,
      title: "Content Creation",
      description: "Blog ideas, social media posts, and more"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#5142b5]" />,
      title: "Grammar Fixing",
      description: "Polish your writing to perfection"
    },
    {
      icon: <Laptop className="w-6 h-6 text-[#5142b5]" />,
      title: "30+ Templates",
      description: "Ready-to-use templates for all needs"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f9f8ff] to-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            href={"https://imravidev.vercel.app"} 
            className="inline-flex items-center border border-gray-200 rounded-full py-2 px-4 text-gray-600 text-sm mb-6 transition hover:bg-gray-50 hover:shadow-sm"
          >
            Developer @ Ravi Pandey
          </Link>
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#907ce9] rounded-full blur opacity-20 animate-pulse"></div>
              <div className="relative bg-[#5142b5] p-5 rounded-full shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Where Words <span className="text-[#5142b5]">Meet Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            WriteFlow helps you turn thoughts into powerful content using AI. Stay creative, focused, and always in flow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href="/dashboard"
              className="bg-[#5142b5] hover:bg-[#3f34a4] text-white px-8 py-3 rounded-full font-medium shadow-md transition-all flex items-center gap-2 hover:shadow-lg"
            >
              Get Started <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs text-gray-500">AI Writing Assistant</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <p className="text-gray-700 font-medium">Generate a professional email requesting a meeting</p>
              <div className="mt-2 h-2 w-full bg-gradient-to-r from-[#5142b5] to-[#907ce9] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supercharge Your Writing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              30+ ready-to-use templates for all your content needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all border border-gray-100"
              >
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#f9f8ff]">
        <div className="max-w-4xl mx-auto text-center bg-[#5142b5] rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
          <p className="text-lg text-[#d8d3ff] mb-8">
            Join thousands of students, creators, and professionals who use WriteFlow daily.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center bg-white text-[#5142b5] px-8 py-3 rounded-full font-medium shadow-md transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            Start Writing for Free <MoveRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-[#5142b5] w-8 h-8 rounded-lg flex items-center justify-center mr-3">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">WriteFlow</span>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WriteFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}