/**
 * App Configuration State
 */

import { makeVar } from "@apollo/client";

interface AppConfig {
  nightMode: boolean;
}

const initialAppConfig: AppConfig = JSON.parse(
  window.localStorage.getItem("packability.appConfig")
) || {
  nightMode: false,
};

export const appConfigVar = makeVar<AppConfig>(initialAppConfig);
