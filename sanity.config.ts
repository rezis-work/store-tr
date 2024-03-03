import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/schemaTypes";
import StudioHeader from "./app/components/StudioHeader";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_default_project_id";
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "your_default_dataset";

export default defineConfig({
  basePath: "/studio",
  name: "TRCOMERCE_Shopping",
  title: "TRCOMERCE online shopping",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioHeader,
    },
  },
});
