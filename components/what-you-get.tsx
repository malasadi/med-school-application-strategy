import { Check } from "lucide-react"

const items = [
  "Full written review of your application (academics + activities)",
  "School-by-school assessment for Canadian medical schools",
  "Your 2 - 3 biggest gaps holding you back right now",
  "School-by-school competitiveness overview for Canadian med schools",
  "6-month action plan focused only on highest-impact changes",
  "Suggested target school list based on your current profile",
]

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="font-heading text-sm font-semibold tracking-wider text-primary">
              What you get
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              A fully personalized breakdown
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A focused report that gives you clarity on where you stand and the actions you can take to actually make a difference in your chances
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
