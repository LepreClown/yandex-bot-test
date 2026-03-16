"use client";

import { createContext } from "react";
import { Site } from "@/components/hooks/useSite";

interface IAppContext {
  site?: Site;
  hostPrefix?: string;
  isDarkTheme?: boolean;
  regionPrefix?: string;
  defaultTimezone?: string;
  hasBonuses?: boolean;
}

export const AppContext = createContext<IAppContext>({});
