import React from "react";
import { TemplateHeader } from "@/components/layout/TemplateHeader";
import { TemplateHero } from "@/components/sections/TemplateHero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { PhilosophyStory } from "@/components/sections/PhilosophyStory";
import { TemplatePremiumTea } from "@/components/sections/TemplatePremiumTea";
import { TemplateElixirFeature } from "@/components/sections/TemplateElixirFeature";
import { TemplateTeaGarden } from "@/components/sections/TemplateTeaGarden";
import { TeaCollectionsBento } from "@/components/sections/TeaCollectionsBento";
import { BrewingRitual } from "@/components/sections/BrewingRitual";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQSection } from "@/components/sections/FAQSection";
import { TemplateFooter } from "@/components/layout/TemplateFooter";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* User Requested Template Header */}
      <TemplateHeader />

      {/* 1. Hero Section ("Tea is the Elixir of life.") */}
      <TemplateHero />

      {/* Marquee Ticker */}
      <MarqueeStrip />

      {/* 2. Philosophy & Sourcing Story ("About Us") */}
      <PhilosophyStory />

      {/* 3. Circular Products Section ("Our Premium Tea") */}
      <TemplatePremiumTea />

      {/* 4. Feature Card ("Tea Elixir") */}
      <TemplateElixirFeature />

      {/* 5. Article Grid ("Our Tea Garden") */}
      <TemplateTeaGarden />

      {/* Bento Grid Showcase */}
      <TeaCollectionsBento />

      {/* 6. Sommelier Steep Guide ("Brewing Ritual") */}
      <BrewingRitual />

      {/* Testimonials & Membership */}
      <Testimonials />
      <CTABanner />

      {/* 7. FAQ & Contact Section */}
      <FAQSection />

      {/* Luxury Atelier Footer */}
      <TemplateFooter />
    </main>
  );
}
