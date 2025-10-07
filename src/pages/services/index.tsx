import React from 'react';
import HeroBanner from '@/pages/layout/banner';
import LaptopVideo from '@/pages/components/laptopvideo';
import DummyDesign from '@/pages/components/DummyDesign';
import ImageTextGrid from '@/pages/components/ImageTextGrid';
import NeedSlider from '@/pages/components/NeedSlider';
import FaqAccordian from '@/pages/components/FaqAccordian';
import WeWork from '@/pages/components/WeWork';
// import '@/pages/styles/custom-module.css';

export default function Page() {
  return (
    <>
      <HeroBanner />
      <LaptopVideo />
      <DummyDesign />
      <WeWork />
      <ImageTextGrid />
      <FaqAccordian />
      <NeedSlider />
    </>
  );
}
