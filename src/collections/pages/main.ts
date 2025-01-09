import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 1024,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: "centre",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
export const NormalPages: CollectionConfig = {
  slug: "normal-pages",
  fields: [
    {
      name: "sections",
      type: "blocks",
      blocks: [
        {
          slug: "hero",
          fields: [
            { name: "title", type: "text" },
            { name: "description", type: "text" },
            {
              name: "cta_button_text",
              type: "text",
            },
            {
              name: "learn_more_text",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
export const MainCollection: CollectionConfig = {
  slug: "pages",
  versions: {
    maxPerDoc: 5,
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
  fields: [
    {
      name: "Hero Section",
      type: "group",
      fields: [
        { name: "Hero Title", type: "text" },
        {
          name: "hero_description",
          type: "text",
        },
        {
          name: "hero_cta_button_text",
          type: "text",
        },
        {
          name: "hero_learn_more_text",
          type: "text",
        },
      ],
    },
    {
      name: "Feature Section",
      type: "group",
      fields: [
        { name: "feature_captio", type: "text" },
        { name: "feature_title", type: "text" },
        { name: "feature_description", type: "text" },
        { name: "feature_description2", type: "text" },
        {
          name: "features",
          type: "array",
          fields: [
            { name: "name", type: "text" },
            { name: "description", type: "text" },
            { name: "href", type: "text" },
            {
              name: "icon",
              type: "ui",
              admin: {
                components: {
                  UpIcon: "@heroicons/react/24/outline/ArrowUpIcon",
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: "CTA Section",
      type: "group",
      fields: [
        { name: "cta", type: "text" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "buttonText", type: "text" },
      ],
    },
    {
      name: "Team Section",
      type: "group",
      fields: [
        { name: "team_title", type: "text" },
        { name: "team_description", type: "text" },
        {
          name: "people",
          type: "array",
          fields: [
            { name: "name", type: "text" },
            { name: "role", type: "text" },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              filterOptions: {
                mimeType: { contains: "image" },
              },
            },
            { name: "xUrl", type: "text" },
            { name: "linkedinUrl", type: "text" },
          ],
        },
      ],
    },
  ],
};
