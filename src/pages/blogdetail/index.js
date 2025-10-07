import React from 'react';
// import HeroBanner from '@/pages/layout/banner';
import BlogDetailBanner from '@/pages/components/BlogDetailBanner';
import BlogDetail from '@/pages/components/BlogDetail';
import FaqAccordian from '@/pages/components/FaqAccordian';
import RelatedArticles from '@/pages/components/RelatedArticles';
// import '@/pages/styles/custom-module.css';

export default function Page() {
  return (
    <>
      {/* <HeroBanner /> */}
      <BlogDetailBanner />
      <BlogDetail />
      <FaqAccordian />
      <RelatedArticles />
    </>
  );
}
