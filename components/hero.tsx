import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="font-heading text-5xl font-semibold text-foreground sm:text-6xl">
                  1,000+
                </div>
                <p className="mt-2 text-muted-foreground">
                  students used the free checker
                </p>
              </div>
              <div>
                <div className="font-heading text-5xl font-semibold text-foreground sm:text-6xl">
                  10,000+
                </div>
                <p className="mt-2 text-muted-foreground">
                  students reached every week on TikTok
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
