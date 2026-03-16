import type { ReactNode } from "react";

import { RootProvider } from "./RootProvider";
import { cacheLife, cacheTag } from "next/cache";

const THEME_COLOR = "#601dc0";
const BANNER_TYPES = [
  "C_SIDEBAR_LEFT",
  "FORECASTS_TOP",
  "FORECASTS_CENTER",
  "FORECASTS_BOTTOM",
  "BRAND_MC_BLOCK_MAIN",
  "HOME_BG",
];

export async function fetchAppSettingsData(bannersTypes: string[] = []): Promise<any> {
  "use cache";
  cacheLife({
    stale: 60,
    revalidate: 60,
    expire: 3600,
  });
  cacheTag("appSettings", "banners", "timezone");

  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json(),
    );

    return {
      data,
    };
  } catch {
    return { data: [] };
  }
}

export async function AppSettingsWrapper({ children }: { children: ReactNode }) {
  const { data } = await fetchAppSettingsData(BANNER_TYPES);

  return (
    <RootProvider themeColor={THEME_COLOR} data={data}>
      {children}
    </RootProvider>
  );
}
