import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { WhatYouGet } from "@/components/what-you-get"
import { Pricing } from "@/components/pricing"
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
        <Pricing />
        <WhatYouGet />
        <About />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
