import type { FullConfig } from "@playwright/test";

const globalTeardown = async (config: FullConfig) => {
  console.log("global teardown w/ config:", config);
};

export default globalTeardown;
