import React from 'react';
import { Briefcase, Bell, User, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-fuchsia-500 grid place-items-center text-white">
            <Briefcase size={18} />
          </div>
          <span className="font-semibold text-xl tracking-tight">TalentSphere</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 transition-colors" href="#jobs">Jobs</a>
          <a className="hover:text-gray-900 transition-colors" href="#companies">Companies</a>
          <a className="hover:text-gray-900 transition-colors" href="#insights">Insights</a>
          <a className="hover:text-gray-900 transition-colors" href="#advisor">Career Advisor</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Notifications">
            <Bell size={20} />
          </button>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-black/90">
            <Sparkles size={18} />
            Post a Job
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
            <User size={18} />
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;