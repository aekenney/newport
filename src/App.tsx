import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BurnoutHero from '@/components/features/BurnoutHero';
import About from '@/components/features/About';
import RepoList from '@/components/features/RepoList';
import ProjectList from '@/components/features/ProjectList';
import Experience from '@/components/features/Experience';
import Community from '@/components/features/Community';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Navbar />
            <BurnoutHero />
            <main className="max-w-7xl mx-auto px-10 py-40 space-y-72">
                <About />
                <RepoList />
                <ProjectList />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
                    <Experience />
                    <Community />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
