import { defineCliConfig } from "sanity/cli";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_default_project_id";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "your_default_dataset";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
