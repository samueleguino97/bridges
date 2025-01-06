import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import { MainCollection } from "@/collections/pages/main";

export default buildConfig({
  editor: lexicalEditor(),

  admin: {
    livePreview: {
      url: "http://localhost:3000",
      collections: ["pages"],
    },
  },

  collections: [MainCollection],
  secret: process.env.TURSO_AUTH_TOKEN!,

  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
  sharp,
});
