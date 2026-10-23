/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { PaintDivider } from './components/Dividers.tsx';
import { FloatingCallButton } from './components/FloatingCallButton.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800 flex flex-col selection:bg-[#1BB5C8] selection:text-white">
      {/* 1. Sticky Header (Dark Charcoal) */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section (Dark Charcoal) */}
        <Hero />

        {/* Decorative Paint Stroke Divider from Hero (#1C1C1E) to Services (#FAF7F2) */}
        <div className="bg-[#1C1C1E]">
          <PaintDivider fillColor="#FAF7F2" variant="paint-stroke" />
        </div>

        {/* 3. Services & Why Choose Us Section (#FAF7F2) */}
        <Services />

        {/* Decorative Wave/Paint Divider from Services (#FAF7F2) to Contact (#FFFFFF) */}
        <div className="bg-[#FAF7F2]">
          <PaintDivider fillColor="#FFFFFF" variant="brush-edge" />
        </div>

        {/* 4. Contact Section (#FFFFFF) & Slim Dark Charcoal Footer */}
        <ContactSection />
      </main>

      {/* Floating Red Call Button for Mobile */}
      <FloatingCallButton />
    </div>
  );
}
