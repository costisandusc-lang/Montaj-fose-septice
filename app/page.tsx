import { SiteHeader } from '@/components/site/site-header'
import { About, Cta, Hero, Process, Services, SiteFooter, Stats } from '@/components/site/sections'
import { Contact } from '@/components/site/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Process />
        <Cta />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
