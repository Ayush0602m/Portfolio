import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { DockNav } from './components/DockNav';
import { Header } from './components/Header';
import React from 'react';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">

        <DockNav />

   
        <main className="max-w-3xl mx-auto px-6 border-1 border-grey relative align-middle">
              <Header />
          <About/>
        
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

      </div>
    </ThemeProvider>
  );
}