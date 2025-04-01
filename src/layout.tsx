
import { useState } from 'react';
import { cn } from './utils/cn';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-white/95 shadow-subtle backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="h-6 w-6"
              >
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-primary-500">Convers</span>
              <span className="text-accent-500">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a 
              href="#solutions" 
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500"
            >
              Solutions
            </a>
            <a 
              href="#product" 
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500"
            >
              Product
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500"
            >
              Pricing
            </a>
            <a 
              href="#resources" 
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-500"
            >
              Resources
            </a>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <a 
              href="#login" 
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-500"
            >
              Log in
            </a>
            <a 
              href="#demo" 
              className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Get a Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="flex items-center p-2 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute left-0 right-0 z-20 bg-white pb-6 shadow-md transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="space-y-1 px-4 pt-2">
            <a
              href="#solutions"
              className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
            >
              Solutions
            </a>
            <a
              href="#product"
              className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
            >
              Product
            </a>
            <a
              href="#pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
            >
              Resources
            </a>
            <div className="pt-4">
              <a
                href="#login"
                className="block rounded-md px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-500"
              >
                Log in
              </a>
              <a
                href="#demo"
                className="mt-2 block rounded-md bg-primary-500 px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-600"
              >
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-primary-50 px-4 py-1 text-sm font-medium text-primary-600">
              AI-Powered Sales Intelligence
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              <span className="block">Transform Sales Conversations</span>
              <span className="block text-primary-500">With Intelligent Insights</span>
            </h1>
            <p className="mb-8 text-xl text-neutral-600">
              Turn conversation data into actionable intelligence. Help your sales team connect more authentically, 
              understand customer needs more deeply, and close more deals.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a
                href="#demo"
                className="rounded-md bg-primary-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Request a Demo
              </a>
              <a
                href="#learn-more"
                className="rounded-md border border-neutral-300 bg-white px-8 py-3 text-base font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5"
                  >
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  <span className="text-primary-500">Convers</span>
                  <span className="text-accent-500">AI</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                Empowering sales teams with AI-driven conversation intelligence to close more deals.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#twitter" className="text-neutral-400 hover:text-primary-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#linkedin" className="text-neutral-400 hover:text-primary-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#facebook" className="text-neutral-400 hover:text-primary-500">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">Products</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#realtime-assistant" className="text-sm text-neutral-600 hover:text-primary-500">
                    Real-time Assistant
                  </a>
                </li>
                <li>
                  <a href="#conversation-analytics" className="text-sm text-neutral-600 hover:text-primary-500">
                    Conversation Analytics
                  </a>
                </li>
                <li>
                  <a href="#coaching" className="text-sm text-neutral-600 hover:text-primary-500">
                    Coaching Platform
                  </a>
                </li>
                <li>
                  <a href="#integrations" className="text-sm text-neutral-600 hover:text-primary-500">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#blog" className="text-sm text-neutral-600 hover:text-primary-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#guides" className="text-sm text-neutral-600 hover:text-primary-500">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#webinars" className="text-sm text-neutral-600 hover:text-primary-500">
                    Webinars
                  </a>
                </li>
                <li>
                  <a href="#customers" className="text-sm text-neutral-600 hover:text-primary-500">
                    Customer Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#about" className="text-sm text-neutral-600 hover:text-primary-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-sm text-neutral-600 hover:text-primary-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-neutral-600 hover:text-primary-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-sm text-neutral-600 hover:text-primary-500">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">&copy; 2023 ConversAI, Inc. All rights reserved.</p>
            <div className="mt-4 flex space-x-6">
              <a href="#privacy" className="text-xs text-neutral-500 hover:text-primary-500">
                Privacy Policy
              </a>
              <a href="#terms" className="text-xs text-neutral-500 hover:text-primary-500">
                Terms of Service
              </a>
              <a href="#cookies" className="text-xs text-neutral-500 hover:text-primary-500">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
