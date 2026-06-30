import Image from "next/image"

export function About() {
  return (
    <section id="about" className="border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/Headshot_new.png"
                alt="Mo, Canadian med school application strategist"
                width={640}
                height={720}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>

          <div>
            <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              About Mo
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I'm a 3rd year MD student at the University of Toronto, one of the most selective medical schools in Canada. I went through this exact process not long ago.
              </p>
              <p>
                My breakdowns of Canadian med school admissions have reached over 350,000 students on TikTok. Most of what I cover comes from the questions I get every day from premeds who are smart, prepared, and still not sure if they're doing the right things.
              </p>
              <p>
                This application review is what I wish existed when I was applying: a real look at your exact profile and situation from someone who got in and knows what schools are looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
