import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url:'postgresql://ai-course_owner:4T2IFBUSaxrJ@ep-shrill-scene-a7xsx1a6.ap-southeast-2.aws.neon.tech/AI-Study-Material-Gen?sslmode=require'
  }
});
