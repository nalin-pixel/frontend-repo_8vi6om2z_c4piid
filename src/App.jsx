import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';

function App() {
  const handleSearch = (payload) => {
    console.log('Search submitted:', payload);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <JobList />
        <AIAdvisor />
      </main>
      <Footer />
    </div>
  );
}

export default App;
