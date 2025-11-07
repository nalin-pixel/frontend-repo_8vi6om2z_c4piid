import React from 'react';
import { MapPin, Clock, Building2, Bookmark, CheckCircle2 } from 'lucide-react';

const fakeJobs = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Nova Labs',
    location: 'Remote - US',
    type: 'Full-time',
    posted: '2d ago',
    skills: ['React', 'TypeScript', 'Tailwind'],
    salary: '$140k - $180k',
    verified: true,
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Orbit Systems',
    location: 'New York, NY',
    type: 'Hybrid',
    posted: '1d ago',
    skills: ['Figma', 'Design Systems', 'Prototyping'],
    salary: '$110k - $140k',
    verified: true,
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'QuantumIQ',
    location: 'Austin, TX',
    type: 'On-site',
    posted: 'Today',
    skills: ['Python', 'ML', 'NLP'],
    salary: '$150k - $190k',
    verified: false,
  },
];

const JobCard = ({ job }) => {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              {job.verified && (
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                  <CheckCircle2 size={14} /> Verified
                </span>
              )}
            </div>
            <div className="mt-0.5 text-sm text-gray-600 flex items-center gap-2">
              <Building2 size={16} /> {job.company}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
              <span className="inline-flex items-center gap-1"><Clock size={16} /> {job.posted}</span>
              <span className="inline-flex items-center gap-1">{job.type}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full bg-gray-100">{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="text-sm font-medium">{job.salary}</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm">Apply</button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" aria-label="Save">
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobList = () => {
  return (
    <section id="jobs" className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured roles</h2>
            <p className="text-gray-600">Curated opportunities matched to your skills and preferences</p>
          </div>
          <button className="text-sm font-medium text-indigo-700 hover:text-indigo-900">See all</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {fakeJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;