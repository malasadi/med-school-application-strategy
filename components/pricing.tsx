import { ArrowRight, Check, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const reviewIncludes = [
  "Written profile analysis",
  "School-by-school assessment",
  "Your 2–3 biggest limiting factors",
  "6-month action plan",
  "Recommended target school list",
  "Returned within 48 hours",
]

const freeIncludes = [
  "Instant eligibility snapshot",
  "Compare stats across schools",
  "No account required",
]

export function Pricing() {
  return (
    <section id="pricing" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Two ways to get clarity
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Start free to see where you stand, or get the full personalized
            strategy review when you&apos;re ready to act.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Paid */}
          <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-card p-8 shadow-sm">
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Most popular
            </span>
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Full application strategy review
            </h3>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-heading text-4xl font-semibold text-foreground">
                $59
              </span>
              <span className="text-sm text-muted-foreground">
                one-time, per review
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A detailed, personalized breakdown of your application and exactly
              what to do next.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {reviewIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#eligibility"
              className={cn(
                buttonVariants(),
                "mt-8 h-12 w-full gap-2 px-6 text-base",
              )}
            >
              Start my review
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Free */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Free eligibility checker
            </h3>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="font-heading text-4xl font-semibold text-foreground">
                Free
              </span>
              <span className="text-sm text-muted-foreground">no cost</span>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Instantly see how your stats compare across Canadian medical
              schools.
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {freeIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#eligibility"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-8 h-12 w-full px-6 text-base",
              )}
            >
              Check my eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
