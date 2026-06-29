const steps = [
  {
    number: "01",
    title: "Share your profile",
    body: "Tell me your GPA, MCAT, and the activities you've built so far. The more honest, the sharper the plan.",
  },
  {
    number: "02",
    title: "I analyze it manually",
    body: "I review your profile school-by-school against Canadian medical school requirements and trends — no generic templates.",
  },
  {
    number: "03",
    title: "You get a clear plan",
    body: "Within 48 hours you receive a written breakdown of your biggest limiting factors and the highest-impact next steps.",
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
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            From guesswork to a clear direction
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
