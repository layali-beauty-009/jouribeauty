import { getProducts } from "@/lib/api";
import { fallbackProducts } from "@/lib/fallbackProducts";
import { getHomeContent } from "@/lib/content";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { HomeHero } from "@/components/home/HomeHero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyBrand } from "@/components/home/WhyBrand";
import { Testimonials } from "@/components/home/Testimonials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { TrustStrip } from "@/components/home/TrustStrip";

export default async function HomePage() {
  const fetched = await getProducts().catch(() => []);
  const list = fetched.length > 0 ? fetched : fallbackProducts;
  const content = getHomeContent(list);

  return (
    <>
      <AnnouncementBar text={content.announcement} />
      <HomeHero content={content.hero} />
      <FeaturedProducts
        label={content.formulations.label}
        title={content.formulations.title}
        subtitle={content.formulations.subtitle}
        products={list}
      />
      <WhyBrand {...content.whyBrand} />
      <Testimonials {...content.testimonials} />
      <HowItWorks {...content.howItWorks} />
      <FinalCTA {...content.finalCta} />
      <FAQAccordion {...content.faq} />
      <TrustStrip items={content.trustStrip} />
    </>
  );
}
