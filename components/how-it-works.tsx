const steps = [
  {
    number: "01",
    title: "Share your profile",
    body: "Your GPA, MCAT (if you have it), and a quick rundown of your activities. No formal CV needed. A few sentences per activity is enough. The more honest you are about where things actually stand, the more useful this gets.",
  },
  {
    number: "02",
    title: "I go through it properly",
    body: "I review your profile the same way an admissions lens would, looking at Canadian med school expectations, patterns, and where you’re currently strong or falling short.",
  },
  {
    number: "03",
    title: "You get a clear, prioritized plan",
    body: "You get a written breakdown of what’s holding your application back the most, and what to actually focus on next to improve your chances in the fastest, highest-impact way.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-heading text-sm font-semibold tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Giving you  clarity in this uncertain process
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-heading text-2xl font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
