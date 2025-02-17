"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";

import { useRouter } from "next/navigation";
import React from "react";

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={
        process.env.NEXT_PUBLIC_PAYLOAD_LIVE_PREVIEW_URL! ||
        "http://localhost:3000"
      }
    />
  );
};
