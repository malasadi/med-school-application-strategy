import { Compass, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
                Mo Alasadi
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Personalized strategy reviews for Canadian medical school
              applicants.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-sm font-semibold text-foreground">Explore</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground transition-colors hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Contact</p>
              <ul className="mt-3 space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:drmalasadi@gmail.com"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4" aria-hidden="true" />
                    drmalasadi@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mo Alasadi. All rights reserved.</p>
          <p>
            Guidance only. Not a guarantee of admission to any institution.
          </p>
        </div>
      </div>
    </footer>
  )
}
