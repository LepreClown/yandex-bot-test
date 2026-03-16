import { useContext } from "react";
import { AppContext } from "../context/helper";

export type TLangCode = "ru" | "pt" | "en";

export interface Site {
  name: string;
  code: string;
  host?: string;
  httpHost?: string;
  regionCode?: string;
  project: string;
  timezone?: string;
  mindbox?: boolean;
  hasAuth?: boolean;
  image?: string;
  lang: TLangCode;
  hasUserProfile?: boolean;
  hasBonuses?: boolean;
  directory?: string;
}

export default function useSite(): Site {
  const site = useContext(AppContext).site;

  if (!site) throw new Error("Site not add in AppContext");

  return site;
}

export function is(this: Site, site: string | string[]) {
  if (Array.isArray(site)) {
    return site.includes(this.code) || site.includes(this.lang) || site.includes(this?.project);
  }

  return this.code === site || this.lang === site || this.project === site;
}
