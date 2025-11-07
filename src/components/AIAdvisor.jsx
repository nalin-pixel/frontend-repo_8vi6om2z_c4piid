import React from 'react';
import { Sparkles, Activity, Target, Lightbulb, ArrowRight } from 'lucide-react';

const Tips = () => (
  <div className="grid sm:grid-cols-3 gap-3">
    {[
      { icon: Activity, title: 'Skill Gap Analyzer', text: 'We scan your profile against roles to highlight missing skills and suggest resources.' },
      { icon: Target, title: 'Personalized Matches', text: 'AI ranks jobs by fit score using your experience, goals, and activity.' },
      { icon: Lightbulb, title: 'Smart Applications', text: 'Generate tailored cover letters and resume tweaks in one click.' },
    ].map(({ icon: Icon, title, text }) => (
      <div key={title} className="rounded-2xl border border-gray-200 p-4 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 grid place-items-center text-white">
            <Icon size={18} />
          </div>
          <div className="font-medium">{title}</div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
    ))}
  </div>
);

const AIAdvisor = () => {
  return (
    <section id="advisor">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 text-xs font-medium">
              <Sparkles size={16} /> AI Career Advisor
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Level up your search with intelligent guidance</h2>
            <p className="mt-3 text-gray-600">Turn your experience into opportunities. Get tailored recommendations, identify gaps, and apply with confidence in minutes.</p>
            <div className="mt-6"><Tips /></div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black/90">
                Try the advisor
                <ArrowRight size={18} />
              </button>
              <button className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50">Upload resume</button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 p-6 bg-gradient-to-tr from-indigo-50 to-pink-50">
              <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3">
                {[{ label: 'Profile completeness', value: 82 }, { label: 'Avg. match score', value: 76 }, { label: 'Response rate', value: 64 }].map(s => (
                  <div key={s.label}>
                    <div className="flex items-center justify-between text-sm font-medium">
                      <span>{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" style={{ width: `${s.value}%` }} />
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-sm text-gray-600">Quick actions</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {['Generate cover letter', 'Optimize resume', 'Find learning path', 'Discover mentors'].map(a => (
                      <button key={a} className="text-left text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">{a}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;