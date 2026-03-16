import { type FC, ReactNode, Suspense } from "react";
import { ProgressBarProvider } from "./ProgressBarProvider";
import { AppProvider } from "@/components/providers/AppProvider";
import { Site } from "@/components/hooks/useSite";
import { StoreProvider } from "./StoreProvider";

interface IRootProviderProps {
  children: ReactNode;
  themeColor: string;
  data?: any;
}

const SOCIAL_CYBER_VK = [
  {
    title: "Dota 2",
    url: "https://vk.ru/metaindota2",
  },
  {
    title: "CS2",
    url: "https://vk.ru/metaincsgo",
  },
];

const SITE: Site = {
  name: "123",
  lang: "ru",
  code: "350000",
  project: "GTA RP",
};

export const RootProvider: FC<IRootProviderProps> = ({ children, themeColor, data }) => {
  if (!SITE) {
    throw new Error(`Site not found for host ${process.env.NEXT_PUBLIC_HOST}`);
  }

  return (
    <StoreProvider initialBanners={data} initialTimezone={data}>
      <ProgressBarProvider themeColor={themeColor}>
        <AppProvider site={SITE}>
          <Suspense>{children}</Suspense>
        </AppProvider>
      </ProgressBarProvider>
    </StoreProvider>
  );
};
