import { CollectionConfig } from "payload";

const Messages: CollectionConfig = {
  slug: "messages",
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phoneNumber",
      type: "text",
    },
  ],
};

export default Messages;
