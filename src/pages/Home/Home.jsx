import React from 'react';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Hero/Hero';
import SectionsGrid from '../../components/Grid/SectionsGrid';
import TryBeforeBuySection from '../../components/Section/TryBeforeBuySection';
import DiscoverPiecesGrid from '../../components/Grid/DiscoverPieces';
import Story from '../../components/Story/Story';

const Home = () => {
  return (
    <Layout tab="home">
      <Hero />
      <SectionsGrid />
      <TryBeforeBuySection />
      <DiscoverPiecesGrid />
      <Story />
    </Layout>
  );
};

export default Home;
