'use client';

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function InitUser() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      fetch("/api/usuario/init", { method: "POST" });
    }
  }, [isSignedIn]);

  return null;
}
