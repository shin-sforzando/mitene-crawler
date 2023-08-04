import type { FullConfig } from "@playwright/test";

const globalSetup = async (config: FullConfig) => {
  console.log("global setup w/ config:", config);
};

export default globalSetup;
