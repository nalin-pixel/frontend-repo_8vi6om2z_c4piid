import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-gray-900 font-semibold">TalentSphere</div>
            <p className="mt-2">A modern job platform connecting seekers, companies, and recruiters with intelligent matching and tools.</p>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Job Seekers</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-gray-900" href="#">Find Jobs</a></li>
              <li><a className="hover:text-gray-900" href="#">Resume Builder</a></li>
              <li><a className="hover:text-gray-900" href="#">Career Advisor</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Employers</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-gray-900" href="#">Post a Job</a></li>
              <li><a className="hover:text-gray-900" href="#">Recruiter Tools</a></li>
              <li><a className="hover:text-gray-900" href="#">Analytics</a></li>
            </ul>
          </div>
          <div>
            <div className="text-gray-900 font-semibold">Company</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-gray-900" href="#">About</a></li>
              <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
              <li><a className="hover:text-gray-900" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} TalentSphere. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-gray-900" href="#">Twitter</a>
            <a className="hover:text-gray-900" href="#">LinkedIn</a>
            <a className="hover:text-gray-900" href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;