import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { WhatYouGet } from "@/components/what-you-get"
import { Pricing } from "@/components/pricing"
import { EligibilityChecker } from "@/components/eligibility-checker"
import { About } from "@/components/about"
import { EarlyAccess } from "@/components/early-access"
import { Faq } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouGet />
        <Pricing />
        <EligibilityChecker />
        <About />
        <EarlyAccess />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
