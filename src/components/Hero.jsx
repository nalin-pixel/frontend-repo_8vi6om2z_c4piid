import React from 'react';
import { Search, Star, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ query, location });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_45%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-medium">
              <ShieldCheck size={16} /> Verified Companies • AI Matching
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
              Discover roles that fit your skills and ambitions
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Search thousands of verified opportunities and get smart recommendations powered by your profile, activity, and goals.
            </p>

            <form onSubmit={submit} className="mt-6 bg-white/80 backdrop-blur rounded-2xl border border-gray-200 p-2 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white">
                  <Search size={18} className="text-gray-500" />
                  <input
                    className="w-full outline-none text-sm"
                    placeholder="Search by title, skill, or company"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <div className="sm:w-56 flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500"><path fillRule="evenodd" d="M11.54 22.351a.75.75 0 0 0 .92 0c1.003-.79 9.04-7.324 9.04-13.351a10 10 0 1 0-20 0c0 6.027 8.037 12.561 9.04 13.351ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" /></svg>
                  <input
                    className="w-full outline-none text-sm"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black/90">
                  Search
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">Remote</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">Senior</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">TypeScript</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">Design</span>
              </div>
            </form>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1"><Star className="text-amber-500" size={18} /> Trusted by 2,000+ companies</div>
              <div>10k+ jobs posted this month</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-gray-200 bg-gradient-to-tr from-indigo-50 to-pink-50 p-6">
              <div className="h-full w-full rounded-2xl bg-white shadow-sm p-4">
                <div className="grid grid-cols-3 gap-3 h-full">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 p-3 flex flex-col gap-2">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
                      <div className="h-2.5 bg-gray-200 rounded w-2/3" />
                      <div className="h-2 bg-gray-100 rounded w-full" />
                      <div className="mt-auto flex items-center justify-between">
                        <div className="h-2 bg-gray-100 rounded w-16" />
                        <div className="h-6 w-6 rounded-md bg-gray-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;