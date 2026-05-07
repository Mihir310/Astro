import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PanchangReports from './components/PanchangReports';
import CategoryGrids from './components/CategoryGrids';
import Calculators from './components/Calculators';
import PersonalYearCalculator from './components/PersonalYearCalculator';
import LuckyColourCalculator from './components/LuckyColourCalculator';
import VehicleNumberCalculator from './components/VehicleNumberCalculator';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import ProductCategoryPage from './components/ProductCategoryPage';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import BookingSection from './components/BookingSection';
import FooterSection from './components/FooterSection';
import { allProducts, productCategories } from './data/productCategories';

type PageKey = 'home' | 'services' | 'consultation' | 'shop' | 'calculators' | 'insights';

const pageKeys: PageKey[] = ['services', 'consultation', 'shop', 'calculators', 'insights'];

function getCurrentRoute() {
  return window.location.hash.replace(/^#\/?/, '') || 'home';
}

function getCurrentPage(route: string): PageKey {
  if (route.startsWith('shop')) {
    return 'shop';
  }

  return pageKeys.includes(route as PageKey) ? (route as PageKey) : 'home';
}

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pt-36 pb-14 bg-[#FAF8F5] border-b border-[#C99C3D]/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-gold-600 uppercase tracking-[0.24em] mb-4">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl font-serif text-[#2C241B] leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#5C4B3D] font-light leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);
  const currentPage = getCurrentPage(currentRoute);

  useEffect(() => {
    const handleRouteChange = () => setCurrentRoute(getCurrentRoute());
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentRoute]);

  const renderPage = () => {
    if (currentRoute.startsWith('service/')) {
      return <ServiceDetail />;
    }

    if (currentRoute.startsWith('calculator/')) {
      const [, calculatorType] = currentRoute.split('/');

      if (calculatorType === 'personal-year') {
        return <PersonalYearCalculator />;
      }

      if (calculatorType === 'lucky-colour') {
        return <LuckyColourCalculator />;
      }

      if (calculatorType === 'vehicle-number') {
        return <VehicleNumberCalculator />;
      }
    }

    if (currentPage === 'services') {
      return <Services />;
    }

    if (currentPage === 'consultation') {
      return (
        <>
          <PageIntro
            eyebrow="Consultation"
            title="Book a clear, practical astrology consultation"
            description="Choose a reading, understand the process, and start with guidance that is grounded, focused, and easy to act on."
          />
          <Booking />
          <Process />
          <Testimonials />
          <FAQ />
        </>
      );
    }

    if (currentPage === 'shop') {
      const [, categorySlug] = currentRoute.split('/');
      const category = productCategories.find((item) => item.slug === categorySlug);

      if (category) {
        return <ProductCategoryPage category={category} />;
      }

      if (categorySlug === 'all') {
        return (
          <ProductCategoryPage
            products={allProducts}
            title="All Products"
            description="Browse every spiritual product, remedy, gemstone, bracelet, yantra, and Rudraksha option in one place."
          />
        );
      }

      return (
        <ProductCategoryPage
          products={allProducts}
          title="Shop"
          description="Browse spiritual products and curated recommendations designed to support your remedies, rituals, and everyday alignment."
          showBackLink={false}
        />
      );
    }

    if (currentPage === 'calculators') {
      return (
        <>
          <PageIntro
            eyebrow="Free Calculators"
            title="Find lucky numbers, colors, dates, and personal guidance"
            description="Use quick calculators and daily Panchang details to plan important decisions with more confidence."
          />
          <Calculators />
          <PanchangReports />
        </>
      );
    }

    if (currentPage === 'insights') {
      return (
        <>
          <PageIntro
            eyebrow="Insights"
            title="Astrology articles, guides, and spiritual notes"
            description="Explore practical explainers on astrology, numerology, crystals, remedies, and timing."
          />
          <Blog />
          <FAQ />
        </>
      );
    }

    return (
      <>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <BookingSection />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C241B] font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Header currentPage={currentPage} />
      {renderPage()}
      <FooterSection />
      <FloatingWhatsApp />
    </div>
  );
}
