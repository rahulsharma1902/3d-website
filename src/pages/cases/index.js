import React from 'react';
import CasesDetailBanner from '@/pages/components/CasesDetailBanner';
import LaptopVideo from '@/pages/components/laptopvideo';
import TwocolumnText from '@/pages/components/TwocolumnText';
import ImageFull from '@/pages/components/ImageFull';
import ResultCol from '@/pages/components/ResultCol';
import DesignProcess from '@/pages/components/DesignProcess';
import StyleguideCol from '@/pages/components/StyleguideCol';
import CaseSliderHead from '@/pages/components/CaseSliderHead';
import CaseSlider from '@/pages/components/CaseSlider';
import DurationCol from '@/pages/components/DurationCol';
import CasesCheckSlider from '@/pages/components/CasesCheckSlider';
// import '@/pages/styles/custom-module.css';

export default function Page() {
  return (
    <>
      <CasesDetailBanner />
      <LaptopVideo />
      <TwocolumnText />
      <ImageFull />
      <ResultCol />
      <DesignProcess />
      <StyleguideCol />
      <CaseSliderHead />
      <CaseSlider />
      <DurationCol />
      <CasesCheckSlider />
    </>
  );
}
