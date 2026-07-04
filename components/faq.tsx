"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

const faqs = [
  {
    q: "Who is this for?",
    a: "Canadian premed students who are deciding whether to apply this cycle, which schools to target, and what to fix before they submit.",
  },
  {
    q: "What's the difference between the free checker and the paid review?",
    a: "The free checker gives an instant snapshot of how your GPA and MCAT compare across schools. The $59 review is a manual, written analysis that factors in your activities, timeline, and what specifically needs to change for your application to be competitive.",
  },
  {
    q: "Do you guarantee admission?",
    a: "No one honestly can. What I provide is clarity, a realistic assessment of where you stand and the highest-impact steps to improve your odds.",
  },
  {
    q: "How do I get started?",
    a: "Click the review button, complete a short intake form with your profile details, and we'll get started with your full review.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <div>
        <div className="text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Questions?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Reach out anytime via email at{" "}
            <a
              href="mailto:drmalasadi@gmail.com"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              drmalasadi@gmail.com
            </a>
            .
          </p>
        </div>
      </div>

      <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <li key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-heading text-lg font-medium text-foreground">
                  {item.q}
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {isOpen ? (
                    <Minus className="size-4" aria-hidden="true" />
                  ) : (
                    <Plus className="size-4" aria-hidden="true" />
                  )}
                </span>
              </button>
              {isOpen && (
                <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
