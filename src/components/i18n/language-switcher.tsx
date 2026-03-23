"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const SWITCH_LOCALES = ["en", "ko", "ja"] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "border-border/70 bg-[color-mix(in_srgb,var(--brand-primary-soft)_45%,var(--bg-surface-subtle))] flex items-center gap-0.5 rounded-lg border p-0.5",
        className,
      )}
      role="group"
      aria-label={t("label")}
    >
      {SWITCH_LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => router.replace(pathname, { locale: code })}
          className={cn(
            "rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors",
            locale === code
              ? "bg-[var(--brand-primary)] text-[var(--text-on-brand)] shadow-sm ring-1 ring-[color-mix(in_srgb,var(--brand-primary)_40%,#fff)]"
              : "text-muted-foreground hover:bg-background/60 hover:text-foreground",
          )}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
