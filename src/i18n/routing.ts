import { defineRouting } from "next-intl/routing";

/**
 * Locales: default English; URL uses prefix only for ko/ja (`as-needed`).
 * Cookie NEXT_LOCALE remembers choice (next-intl middleware).
 */
export const routing = defineRouting({
  locales: ["en", "ko", "ja"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
