import { ArrowRight, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function EarlyAccess() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-foreground md:px-14 md:py-16">
        <div className="absolute -right-10 -top-10 size-44 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-xs font-medium">
            <Clock className="size-3.5" aria-hidden="true" />
            Early access — limited availability
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Only a few reviews each week
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            Because each application review is fully manual and detailed, I take
            on a small number of students each week to keep quality high. This
            ensures every review gets the attention it needs — and is returned
            within 48 hours.
          </p>
          <a
            href="#pricing"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-8 h-12 gap-2 bg-background px-6 text-base text-foreground hover:bg-background/90",
            )}
          >
            Claim a spot this week
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
