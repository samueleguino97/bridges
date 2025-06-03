import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const payload = await getPayload({ config });

  await payload.create({
    collection: "messages",
    data: {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone-number"),
    },
  });

  return NextResponse.redirect(new URL("/contacto", req.url));
}
