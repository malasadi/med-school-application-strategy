"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What you get", href: "#what-you-get" },
  { label: "About Mo", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            Mo Alasadi
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="https://buy.stripe.com/3cI28td5BaF96LF1qk8IU00" className={cn(buttonVariants({ size: "lg" }))}>
            Review my application
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "lg" }), "mt-2")}
            >
              Review my application
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
