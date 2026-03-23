import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { GuardianProfile } from "@/types/domain";
import { guardianTierBadgeVariant, guardianTierLabel } from "@/lib/guardian-tier-ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

type Props = {
  regionSlug: string;
  guardians: GuardianProfile[];
};

export async function ExploreRegionGuardians({ regionSlug, guardians }: Props) {
  const t = await getTranslations("Explore");
  const local = guardians.filter((g) => g.primary_region_slug === regionSlug);
  if (local.length === 0) return null;

  return (
    <section className="bg-muted/20 border-y">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight">{t("regionGuardiansTitle")}</h2>
        <p className="text-muted-foreground mt-1 text-sm">{t("regionGuardiansLead")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {local.map((g) => (
            <Card key={g.user_id} className="border-primary/10" id={`guardian-${g.user_id}`}>
              <CardHeader className="pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-base">{g.display_name}</CardTitle>
                  <Badge variant={guardianTierBadgeVariant(g.guardian_tier)}>
                    {guardianTierLabel(g.guardian_tier)}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-xs">{g.headline}</p>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="text-muted-foreground flex flex-wrap gap-x-3">
                  <span>{t("posts30dOnly", { count: g.posts_approved_last_30d })}</span>
                  {g.avg_traveler_rating != null ? (
                    <span className="inline-flex items-center gap-1">
                      <Star className="text-primary size-3 fill-current" aria-hidden />
                      {g.avg_traveler_rating.toFixed(1)}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-wrap gap-1">
                  {g.expertise_tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-background rounded px-2 py-0.5 text-[10px] font-medium ring-1 ring-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full rounded-lg">
                  <Link href={`/guardians#guardian-${g.user_id}`}>{t("fullProfile")}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
