import type { ConfigContext, ExpoConfig } from "@expo/config";

import { ClientEnv, Env } from "./env";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  newArchEnabled: true,
  description: `${Env.NAME} Mobile App`,
  owner: Env.EXPO_ACCOUNT_OWNER,
  scheme: Env.SCHEME,
  slug: "refugee-literacy-project-app",
  version: Env.VERSION.toString(),
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#2E3C4B",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  experiments: {
    typedRoutes: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#2E3C4B",
    },
    package: Env.PACKAGE,
    edgeToEdgeEnabled: true,
  },
  web: {
    favicon: "./assets/images/favicon.png",
    bundler: "metro",
  },
  plugins: [
    "expo-web-browser",
    "expo-audio",
    ["expo-font"],
    "expo-localization",
    "expo-router",
    ["expo-build-properties"],
    [
      "app-icon-badge",
      {
        enabled: Env.APP_ENV !== "production",
        badges: [
          {
            text: Env.APP_ENV,
            type: "banner",
            color: "white",
          },
          {
            text: Env.VERSION.toString(),
            type: "ribbon",
            color: "white",
          },
        ],
      },
    ],
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: Env.EAS_PROJECT_ID,
    },
  },
});
