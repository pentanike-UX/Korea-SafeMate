import { getTranslations } from "next-intl/server";
import { PublicSiteShell } from "@/components/layout/public-site-shell";
import { HomePageContent } from "@/components/home/home-page-content";
import { BRAND } from "@/lib/constants";

export async function generateMetadata() {
  const t = await getTranslations("Home");
  return {
    title: `${t("metaTitle")} | ${BRAND.name}`,
    description: t("metaDescription"),
  };
}

export default function HomePage() {
  return (
    <PublicSiteShell>
      <HomePageContent />
    </PublicSiteShell>
  );
}
