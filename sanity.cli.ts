import { defineCliConfig } from "sanity/cli";
import { loadSanityEnv } from "./sanity/load-env";
import { dataset, projectId } from "./sanity/env";

loadSanityEnv();

export default defineCliConfig({
  api: { projectId, dataset },
});
