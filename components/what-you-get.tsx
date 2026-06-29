import { Check } from "lucide-react"

const items = [
  "A written profile analysis based on your GPA, MCAT, and activities",
  "School-by-school assessment for Canadian medical schools",
  "Your 2–3 biggest limiting factors, clearly identified",
  "A realistic evaluation of whether to improve stats or apply as-is",
  "A concrete 6-month action plan focused on the highest-impact changes",
  "A recommended target school list based on your profile",
]

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            What you get
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A fully personalized breakdown of your application
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Designed to remove guesswork and give you a clear direction — so you
            spend your time on what actually moves the needle in Canadian med
            school admissions.
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
    </section>
  )
}
