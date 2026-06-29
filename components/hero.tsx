import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Users, value: "1,000+", label: "students used the free checker" },
  { icon: Clock, value: "48 hrs", label: "turnaround on every review" },
  { icon: CheckCircle2, value: "10,000s", label: "reached weekly on TikTok" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              For Canadian premed students
            </span>

            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Not sure what to do with your med school application?
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Should you retake the MCAT, improve your GPA, build more
              activities, or apply this cycle? I break down Canadian medical
              school applications and help you identify exactly what to
              prioritize based on your profile.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className={cn(
                  buttonVariants(),
                  "h-12 gap-2 px-6 text-base",
                )}
              >
                Get my strategy review — $59
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#eligibility"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 px-6 text-base",
                )}
              >
                Check eligibility for free
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Get clarity on your application in minutes.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 hidden size-28 rounded-full bg-accent/30 blur-2xl lg:block" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center gap-3 bg-card px-4 py-8 sm:px-3"
                  >
                    <stat.icon className="size-7 text-primary" aria-hidden="true" />
                    <span className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
                      {stat.value}
                    </span>
                    <span className="text-center text-sm leading-snug text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
