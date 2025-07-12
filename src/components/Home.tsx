import Hero from './Hero';
import WhyChooseUs from './WhyChooseUs';
import OurMachines from './OurMachines';
import Services from './Services';
import FinalCTA from './FinalCTA';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Genesis Press | Professional Printing & Finishing Services</title>
        <meta name="description" content="Genesis Press offers high-quality printing, finishing, and packaging services in India. Fast turnaround, professional results, and a wide range of solutions for all your printing needs." />
        <link rel="canonical" href="https://genesispress.in/" />
        <meta property="og:title" content="Genesis Press | Professional Printing & Finishing Services" />
        <meta property="og:description" content="Genesis Press offers high-quality printing, finishing, and packaging services in India. Fast turnaround, professional results, and a wide range of solutions for all your printing needs." />
        <meta property="og:url" content="https://genesispress.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://genesispress.in/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Genesis Press | Professional Printing & Finishing Services" />
        <meta name="twitter:description" content="Genesis Press offers high-quality printing, finishing, and packaging services in India." />
        <meta name="twitter:image" content="https://genesispress.in/logo.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Genesis Press",
            "url": "https://genesispress.in/",
            "logo": "https://genesispress.in/logo.png",
            "description": "Professional printing, finishing, and packaging services in India.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://genesispress.in/"
            ]
          }
        `}</script>
      </Helmet>
      <Hero />
      <WhyChooseUs />
      <OurMachines />
      <Services />
      <FinalCTA />
    </>
  );
};

export default Home;