import { ReactNode } from "react";

import type { Metadata } from "next";
import "@/styles/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { AppSettingsWrapper } from "@/components/providers/AppSettingsWrapper";

const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NETLIFY && process.env.URL) {
    return `https://${process.env.URL}`;
  }
  return "https://testing-yandex-robots.netlify.app";
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Test Yandex Bot",
  description: "Test site for Yandex Bot indexing",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: "c40c272ea7a1f7d6",
  },
  alternates: {
    canonical: baseUrl,
  },
};

async function IntlProvider({ children }: { children: ReactNode }) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <IntlProvider>
          <AppSettingsWrapper>{children}</AppSettingsWrapper>
        </IntlProvider>
      </body>
    </html>
  );
}
