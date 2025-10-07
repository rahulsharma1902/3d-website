import React from 'react';
import HeroBanner from '@/pages/layout/banner';
import FullVideo from '@/pages/components/FullVideo';
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
      <FullVideo />
      <Mountains />
      <WeWork />
      <AboutSlider />      
      <WeWork />
      <ImageTextGrid />
      <FaqAccordian />
      {/* <NeedSlider />       */}
    </>
  );
}
