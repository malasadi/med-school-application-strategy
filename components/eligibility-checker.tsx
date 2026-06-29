"use client"

import { useMemo, useState } from "react"
import { ArrowRight, GraduationCap } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type School = {
  name: string
  province: string
  minGpa: number
  minMcat: number
}

// Illustrative thresholds for demonstration only.
const schools: School[] = [
  { name: "University of Toronto", province: "ON", minGpa: 3.7, minMcat: 511 },
  { name: "McMaster University", province: "ON", minGpa: 3.0, minMcat: 504 },
  { name: "Western University", province: "ON", minGpa: 3.7, minMcat: 510 },
  { name: "Queen's University", province: "ON", minGpa: 3.5, minMcat: 508 },
  { name: "University of British Columbia", province: "BC", minGpa: 3.4, minMcat: 506 },
  { name: "University of Alberta", province: "AB", minGpa: 3.5, minMcat: 506 },
  { name: "University of Calgary", province: "AB", minGpa: 3.6, minMcat: 507 },
  { name: "University of Ottawa", province: "ON", minGpa: 3.85, minMcat: 0 },
]

type Result = School & { status: "strong" | "borderline" | "reach" }

function evaluate(gpa: number, mcat: number): Result[] {
  return schools.map((s) => {
    const gpaGap = gpa - s.minGpa
    const mcatGap = s.minMcat === 0 ? 1 : mcat - s.minMcat
    let status: Result["status"] = "reach"
    if (gpaGap >= 0.05 && mcatGap >= 1) status = "strong"
    else if (gpaGap >= -0.15 && mcatGap >= -3) status = "borderline"
    return { ...s, status }
  })
}

const statusStyles: Record<Result["status"], { label: string; className: string }> = {
  strong: {
    label: "Competitive",
    className: "bg-primary/10 text-primary",
  },
  borderline: {
    label: "Borderline",
    className: "bg-accent/25 text-accent-foreground",
  },
  reach: {
    label: "Reach",
    className: "bg-muted text-muted-foreground",
  },
}

export function EligibilityChecker() {
  const [gpa, setGpa] = useState("3.7")
  const [mcat, setMcat] = useState("510")
  const [submitted, setSubmitted] = useState(false)

  const results = useMemo(() => {
    const g = Number.parseFloat(gpa)
    const m = Number.parseInt(mcat, 10)
    if (Number.isNaN(g) || Number.isNaN(m)) return []
    return evaluate(g, m)
  }, [gpa, mcat])

  const competitiveCount = results.filter((r) => r.status === "strong").length

  return (
    <section id="eligibility" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <GraduationCap className="size-3.5 text-primary" aria-hidden="true" />
            Free eligibility checker
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            See how your stats compare in minutes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Enter your GPA and MCAT to get an instant snapshot across Canadian
            medical schools. For a personalized strategy that factors in your
            activities and timeline, get the full review.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Estimates are illustrative and based on general admissions trends.
            They are not a guarantee of admission.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="gpa" className="text-sm font-medium text-foreground">
                Cumulative GPA (4.0 scale)
              </label>
              <input
                id="gpa"
                type="number"
                inputMode="decimal"
                step="0.01"
                min="0"
                max="4"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                className="h-11 rounded-lg border border-input bg-background px-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mcat" className="text-sm font-medium text-foreground">
                MCAT score
              </label>
              <input
                id="mcat"
                type="number"
                inputMode="numeric"
                min="472"
                max="528"
                value={mcat}
                onChange={(e) => setMcat(e.target.value)}
                className="h-11 rounded-lg border border-input bg-background px-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button type="submit" className="h-11 px-6 text-base">
              Check
            </Button>
          </form>

          {submitted && results.length > 0 && (
            <div className="mt-7">
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <p className="text-sm leading-relaxed text-foreground">
                  Based on these stats, you look{" "}
                  <span className="font-semibold text-primary">competitive</span>{" "}
                  at{" "}
                  <span className="font-semibold">{competitiveCount}</span> of{" "}
                  {results.length} schools below. Want to know how to move the
                  borderline ones into reach?
                </p>
                <a
                  href="#pricing"
                  className={cn(
                    buttonVariants(),
                    "mt-3 h-10 gap-2 px-4 text-sm",
                  )}
                >
                  Get my full strategy review
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <ul className="mt-5 grid gap-2.5">
                {results.map((r) => {
                  const style = statusStyles[r.status]
                  return (
                    <li
                      key={r.name}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3"
                    >
                      <div>
                        <p className="font-medium text-foreground">{r.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {r.province}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${style.className}`}
                      >
                        {style.label}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {!submitted && (
            <p className="mt-6 text-sm text-muted-foreground">
              Enter your stats and press Check to see your snapshot.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
