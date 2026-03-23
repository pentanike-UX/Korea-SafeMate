import NextLink from "next/link";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BRAND } from "@/lib/constants";

export async function SiteFooter() {
  const tFooter = await getTranslations("Footer");
  const tBrand = await getTranslations("Brand");
  const tNav = await getTranslations("Nav");
  const tHeader = await getTranslations("Header");

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-foreground text-sm font-semibold">{BRAND.name}</p>
            <p className="text-muted-foreground mt-1 max-w-sm text-sm leading-relaxed">
              {tBrand("description")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="text-foreground font-medium">{tFooter("product")}</p>
              <ul className="text-muted-foreground mt-2 space-y-2">
                <li>
                  <Link href="/explore" className="hover:text-foreground">
                    {tNav("explore")}
                  </Link>
                </li>
                <li>
                  <Link href="/guardians" className="hover:text-foreground">
                    {tNav("guardians")}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-foreground">
                    {tNav("services")}
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-foreground">
                    {tNav("book")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-foreground font-medium">{tFooter("guardians")}</p>
              <ul className="text-muted-foreground mt-2 space-y-2">
                <li>
                  <Link href="/guardians/apply" className="hover:text-foreground">
                    {tFooter("apply")}
                  </Link>
                </li>
                <li>
                  <NextLink href="/guardian/dashboard" className="hover:text-foreground">
                    {tFooter("dashboard")}
                  </NextLink>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-foreground font-medium">{tFooter("operations")}</p>
              <ul className="text-muted-foreground mt-2 space-y-2">
                <li>
                  <NextLink href="/admin" className="hover:text-foreground">
                    {tFooter("admin")}
                  </NextLink>
                </li>
                <li>
                  <Link href="/login" className="hover:text-foreground">
                    {tHeader("logIn")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mt-8 border-t pt-6 text-xs leading-relaxed">
          {tFooter("disclaimer")}
        </p>
      </div>
    </footer>
  );
}
