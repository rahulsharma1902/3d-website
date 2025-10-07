import React from 'react';
import HeroBanner from '@/pages/layout/banner';
import Industry from '@/pages/components/Industry';
import DummyDesign from '@/pages/components/DummyDesign';
import ImageTextGrid from '@/pages/components/ImageTextGrid';
import NeedSlider from '@/pages/components/NeedSlider';
import FaqAccordian from '@/pages/components/FaqAccordian';
import Mountains from '@/pages/components/Mountains';
import AboutSlider from '@/pages/components/AboutSlider';
import WeWork from '@/pages/components/WeWork';
// import '@/pages/styles/custom-module.css';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <Industry />
      <Industry />
      <Industry />
      <Industry />
      <Industry />
      {/* <Mountains />
      <WeWork />
      <AboutSlider />      
      <WeWork />
      <ImageTextGrid />
      <FaqAccordian /> */}
      <NeedSlider />      
    </>
  );
}
