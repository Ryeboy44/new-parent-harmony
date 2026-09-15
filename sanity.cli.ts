import { defineCliConfig } from "sanity/cli";
import { getSanityDataset, getSanityProjectId } from "./sanity/env";
import { loadSanityEnv } from "./sanity/load-env";

loadSanityEnv();

const projectId = getSanityProjectId();

export default defineCliConfig({
  api: {
    projectId: projectId || undefined,
    dataset: getSanityDataset(),
  },
});
