import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
  // Server Component: no metadata
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <Image
            src="/placeholder.svg?height=560&width=1600"
            alt="Water specialist testing tap water"
            width={1600}
            height={560}
            className="h-[40vh] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Why Trucks with a duck?</h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <p>
                We started with a simple mission: make water better for families and businesses. From free testing to
                professional installation and maintenance, our certified specialists help you choose the right solution
                for your water and your budget.
              </p>
              <h2>What sets us apart</h2>
              <ul>
                <li>Free in-home water testing and clear recommendations—no pressure.</li>
                <li>Reliable equipment: softeners, whole-house filters, reverse osmosis, and specialty systems.</li>
                <li>Professional installation, salt delivery, and ongoing service plans.</li>
                <li>Friendly local support with warranties and parts availability you can count on.</li>
              </ul>
              <h2>Safety and quality</h2>
              <p>
                We follow best practices for plumbing, sanitation, and system sizing. Our team provides clear instructions
                for care and maintenance so you can enjoy great water for years to come.
              </p>
              <h2>Who we serve</h2>
              <p>
                Homes, offices, restaurants, clinics, and light industrial applications. Whether you&apos;re fighting hard
                water, staining, or taste and odor issues, we can help.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
