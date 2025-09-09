"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function HomePage() {
  return (
    <main className="px-6 py-16">
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/60 px-6 py-4 backdrop-blur">
        <div className="text-lg font-semibold gradient-gold">ANGEL K</div>
        <div className="hidden gap-4 md:flex">
          <a href="#work" className="text-sm text-neutral-300 hover:text-white">Work</a>
          <a href="#about" className="text-sm text-neutral-300 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-neutral-300 hover:text-white">Contact</a>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden"><Menu size={20} /></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4">
              <a href="#work" className="text-neutral-200">Work</a>
              <a href="#about" className="text-neutral-200">About</a>
              <a href="#contact" className="text-neutral-200">Contact</a>
              <SheetClose asChild>
                <Button className="mt-2">Close</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <section className="mx-auto mt-24 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
          Luxury <span className="gradient-gold">&nbsp;meets street energy</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-neutral-300">
          Strategy, tech, and brand architecture by Angel Kellogg. Built for mass adoption,
          crafted with precision.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg">Get in touch</Button>
          <a href="#work">
            <Button variant="outline" size="lg">See Work</Button>
          </a>
        </div>
      </section>

      <section id="work" className="mx-auto mt-24 max-w-5xl">
        <h2 className="mb-4 text-2xl font-semibold">Selected Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="mb-2 text-sm uppercase tracking-wider text-neutral-400">Brand</div>
            <div className="text-lg">Angel Kellogg — Master brand system</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="mb-2 text-sm uppercase tracking-wider text-neutral-400">Web</div>
            <div className="text-lg">Project Angel — Next.js + Tailwind</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <div className="mb-2 text-sm uppercase tracking-wider text-neutral-400">Product</div>
            <div className="text-lg">ForeverDocs — MVP demo</div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto mt-24 max-w-3xl">
        <h2 className="mb-4 text-2xl font-semibold">About</h2>
        <p className="text-neutral-300">
          I build elegant systems where culture, code, and commerce intersect. This site is a clean rebuild
          on Next.js 14 + Tailwind, with a Vaul-powered sheet (fix for the old Radix sheet import).
        </p>
      </section>

      <section id="contact" className="mx-auto mt-24 max-w-3xl">
        <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
        <p className="text-neutral-300">Email: hello@angelkellogg.com</p>
      </section>
    </main>
  );
}
