'use client';

import * as React from 'react';
import '@/lib/env';

import FeatureList from '@/app/components/FeatureList';
import FeatureSection from '@/app/components/FeatureSection';
import FooterSection from '@/app/components/FooterSection';
import HeaderSection from '@/app/components/HeaderSection';
import SliderSection from '@/app/components/SliderSection';

export default function HomePage() {
  return (
    <main>
      <div className='hero-page'>
        <HeaderSection />
        <FeatureSection />
        <SliderSection />
        <FeatureList />
      </div>
      <FooterSection />
    </main>
  );
}
