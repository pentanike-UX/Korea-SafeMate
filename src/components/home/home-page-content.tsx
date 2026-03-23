import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BRAND, SERVICE_COPY } from "@/lib/constants";
import { TrustBoundaryCard } from "@/components/trust/trust-boundary-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, MapPin, Sun } from "lucide-react";

const icons = {
  arrival: Plane,
  k_route: MapPin,
  first_24h: Sun,
} as const;

type ServiceCode = keyof typeof SERVICE_COPY;

export async function HomePageContent() {
  const t = await getTranslations("Home");
  const tSvc = await getTranslations("Services");

  const layers = [
    { titleKey: "layer1Title" as const, bodyKey: "layer1Body" as const },
    { titleKey: "layer2Title" as const, bodyKey: "layer2Body" as const },
    { titleKey: "layer3Title" as const, bodyKey: "layer3Body" as const },
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase">{t("eyebrow")}</p>
          <h1 className="text-text-strong mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            {t("heroLead", { brand: BRAND.name })}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="rounded-xl px-8">
              <Link href="/explore">
                {t("exploreRegions")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link href="/book">{t("bookSupport")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link href="/services">{t("services")}</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 max-w-lg text-xs leading-relaxed">{t("scopeNote")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-text-strong text-2xl font-semibold tracking-tight">{t("layersTitle")}</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t("layersLead")}</p>
        </div>
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {layers.map((layer) => (
            <Card key={layer.titleKey} className="border-primary/10 bg-card/80">
              <CardHeader>
                <CardTitle className="text-base">{t(layer.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(layer.bodyKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mb-8 max-w-2xl">
          <h2 className="text-text-strong text-2xl font-semibold tracking-tight">{t("sessionsTitle")}</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{t("sessionsLead")}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {(Object.keys(SERVICE_COPY) as ServiceCode[]).map((code) => {
            const bullets = tSvc.raw(`cards.${code}.bullets`) as unknown as string[];
            return (
              <Card
                key={code}
                className="border-primary/10 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="text-primary mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    {(() => {
                      const Icon = icons[code];
                      return <Icon className="size-5" />;
                    })()}
                  </div>
                  <CardTitle className="text-lg">{tSvc(`cards.${code}.title`)}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {bullets[0]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    {bullets.slice(1).map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                  <Button asChild variant="link" className="mt-4 h-auto px-0">
                    <Link href="/book">{t("startBooking")}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/30 border-y">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <TrustBoundaryCard />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="bg-cta-brand text-primary-foreground flex flex-col items-start justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{t("ctaTitle")}</h2>
            <p className="mt-2 max-w-xl text-sm text-white/90">{t("ctaLead")}</p>
          </div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-xl shrink-0 border border-white/35 bg-white text-[var(--brand-primary)] shadow-md hover:bg-white/95"
          >
            <Link href="/book">{t("bookNow")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
