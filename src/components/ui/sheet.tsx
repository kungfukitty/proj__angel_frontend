"use client";

import * as React from "react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerDescription, DrawerClose } from "vaul";
import { cn } from "@/lib/utils";

export const Sheet = Drawer;
export const SheetTrigger = DrawerTrigger;
export const SheetClose = DrawerClose;

export function SheetContent({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <DrawerContent className={cn("bg-neutral-900 border border-neutral-800 rounded-t-2xl p-6", className)}>
      <div className="mx-auto w-full max-w-md">{children}</div>
    </DrawerContent>
  );
}

export const SheetHeader = ({ children }: React.PropsWithChildren) => (
  <div className="mb-4 space-y-1">{children}</div>
);

export const SheetTitle = ({ children }: React.PropsWithChildren) => (
  <DrawerTitle className="text-xl font-semibold">{children}</DrawerTitle>
);

export const SheetDescription = ({ children }: React.PropsWithChildren) => (
  <DrawerDescription className="text-sm text-neutral-400">{children}</DrawerDescription>
);
