import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-40 size-[32rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-24 top-10 size-[28rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 size-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-20 md:pt-24">
        <div className="grid items-start gap-15 lg:grid-cols-[0.5fr_1.5fr]">

          {/* LEFT SIDE */}
          <div>
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
                href="https://buy.stripe.com/3cI28td5BaF96LF1qk8IU00"
                className={cn(buttonVariants(), "h-12 gap-2 px-6 text-base")}
              >
                Get my strategy review ($89)
                <ArrowRight className="size-4" />
              </a>

              <a
                href="https://malasadi.github.io/medchance/"
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

          {/* RIGHT SIDE */}
          <div className="relative mt-10">
            <img
              src="/images/Mask group2.svg"
              alt="Hero illustration"
              className="w-[150%] h-auto"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
