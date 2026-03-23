import { getTranslations } from "next-intl/server";
import {
  mockContentCategories,
  mockContentPosts,
  mockFeaturedGuardians,
  mockGuardians,
  mockRegions,
} from "@/data/mock";
import { enrichInsight } from "@/lib/explore-utils";
import { ExploreCtas } from "@/components/explore/explore-ctas";
import { ExploreDiscoveryClient } from "@/components/explore/explore-discovery-client";
import { ExploreHero } from "@/components/explore/explore-hero";
import { FeaturedGuardiansSection } from "@/components/explore/featured-guardians-section";
import { RegionGridCards } from "@/components/explore/region-grid-cards";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { BRAND } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("Explore");
  return {
    title: `${t("metaTitle")} | ${BRAND.name}`,
    description: t("metaDescription"),
  };
}

export default async function ExplorePage() {
  const t = await getTranslations("Explore");
  const approved = mockContentPosts.filter((p) => p.status === "approved");
  const insights = approved.map((p) =>
    enrichInsight(p, mockRegions, mockContentCategories, mockGuardians),
  );

  return (
    <>
      <ExploreHero
        eyebrow={t("eyebrow")}
        title={t("heroTitle")}
        description={t("heroDescription")}
        note={t("heroNote")}
      >
        <Button asChild className="rounded-xl">
          <Link href="#intel">{t("jumpIntel")}</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-xl">
          <Link href="/book">{t("bookSupport")}</Link>
        </Button>
      </ExploreHero>

      <RegionGridCards regions={mockRegions} />

      <FeaturedGuardiansSection featured={mockFeaturedGuardians} guardians={mockGuardians} />

      <ExploreCtas />

      <ExploreDiscoveryClient
        allInsights={insights}
        categories={mockContentCategories}
        regions={mockRegions}
        showRegionOnCards
        showFeaturedRow
        sectionId="intel"
      />
    </>
  );
}
