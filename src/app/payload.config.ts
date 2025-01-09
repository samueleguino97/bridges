import sharp from "sharp";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { buildConfig } from "payload";
import { MainCollection, Media, NormalPages } from "@/collections/pages/main";

export default buildConfig({
  editor: lexicalEditor(),

  admin: {
    livePreview: {
      url:
        process.env.NEXT_PUBLIC_PAYLOAD_LIVE_PREVIEW_URL! ||
        "http://localhost:3000",
      collections: ["pages", "media", "normal-pages"],
    },
  },

  collections: [MainCollection, Media, NormalPages],
  secret: process.env.TURSO_AUTH_TOKEN!,

  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        pages: true,
        media: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  db: sqliteAdapter({
    client: {
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
  }),
  sharp,
});
