import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function ExploreCtas() {
  const t = await getTranslations("Explore");

  return (
    <section className="border-y border-border/60 bg-gradient-to-r from-[var(--brand-primary-soft)]/35 via-[var(--brand-trust-blue-soft)]/25 to-[var(--brand-primary-soft)]/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-foreground text-sm font-medium">{t("ctaTitle")}</p>
          <p className="text-muted-foreground mt-1 max-w-lg text-sm leading-relaxed">{t("ctaLead")}</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
          <Button asChild className="rounded-xl">
            <Link href="/book">{t("bookSupport")}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/guardians/apply">{t("becomeGuardian")}</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-xl">
            <Link href="/guardians">{t("guardianProfiles")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
