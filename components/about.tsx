import Image from "next/image"

export function About() {
  return (
    <section id="about" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/advisor-portrait.png"
                alt="Mo, Canadian med school application strategist"
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              About me
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Hi, I&apos;m Mo
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I help Canadian premeds make sense of their med school
                application strategy. My TikTok breakdowns of admissions
                strategy have reached thousands of students trying to understand
                their chances and their next steps.
              </p>
              <p>
                I spend my time analyzing real applications and identifying what
                actually moves the needle in Canadian med school admissions — not
                generic advice, but the specific changes that matter for your
                profile.
              </p>
            </div>

            <blockquote className="mt-8 rounded-xl border-l-4 border-primary bg-card p-5 font-heading text-lg italic leading-relaxed text-foreground">
              &ldquo;Clarity beats hustle. Once you know the one or two things to
              fix, the whole application gets easier.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
