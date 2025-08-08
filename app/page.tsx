import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Filter, FlaskConical, ShieldCheck, Phone } from 'lucide-react'
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Page() {
  // Server Component: no metadata
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <Image
            src="/images/van-hero-2022.webp"
            alt="Side view of a Water Genius service van with services listed and phone number"
            width={1600}
            height={720}
            className="h-[54vh] w-full object-cover object-left sm:h-[64vh] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Why Trucks with a duck?
              </h1>
              <p className="mx-auto max-w-2xl text-white/90 sm:text-lg">
                Certified water specialists. Proven systems. Friendly local service. Get softer, cleaner, better-tasting
                water for your home or business.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/about">Read More</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white/90 text-slate-900 hover:bg-white">
                  <Link href="/contact">Free Water Test</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro block */}
        <section className="border-t border-b bg-gradient-to-b from-white to-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Want Better Water? Contact Trucks with a duck!
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              With modern water treatment systems, everything we use water for—cooking, bathing, drinking, cleaning,
              laundry—improves. Get a free in-home water test and a system tailored to your water and budget.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Droplets className="h-6 w-6 text-cyan-700" />
                  <CardTitle>Water Softeners</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Image
                    src="/images/water-softener.webp"
                    alt="Outdoor water softener system with brine tank and resin tank"
                    width={320}
                    height={160}
                    className="h-40 w-full rounded-md object-cover object-center"
                    priority={false}
                  />
                  <p className="text-sm text-slate-600">
                    Stop hard water scale, protect fixtures and appliances, and enjoy softer skin and hair.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-a-quote?service=Water%20Softeners">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Filter className="h-6 w-6 text-cyan-700" />
                  <CardTitle>Whole-House Filtration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Image
                    src="/images/whole-house-filtration.webp"
                    alt="Whole-house filtration system with softener and filter tanks installed in a garage"
                    width={320}
                    height={160}
                    className="h-40 w-full rounded-md object-cover"
                  />
                  <p className="text-sm text-slate-600">
                    Reduce chlorine, sediment, and unwanted tastes and odors throughout your entire home.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-a-quote?service=Whole-House%20Filtration">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <FlaskConical className="h-6 w-6 text-cyan-700" />
                  <CardTitle>Reverse Osmosis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Image
                    src="/images/reverse-osmosis.webp"
                    alt="Under-sink reverse osmosis system with storage tank and three-stage filter"
                    width={320}
                    height={160}
                    className="h-40 w-full rounded-md object-cover"
                  />
                  <p className="text-sm text-slate-600">
                    Bottle-quality drinking water right at your sink. Great taste, fewer impurities.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-a-quote?service=Reverse%20Osmosis">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-cyan-700" />
                  <CardTitle>Iron & Sulfur Removal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Image
                    src="/images/iron-sulfur.webp"
                    alt="Under-sink filtration setup with multiple canisters, plumbing, and disposal unit"
                    width={320}
                    height={160}
                    className="h-40 w-full rounded-md object-cover object-center"
                  />
                  <p className="text-sm text-slate-600">
                    Eliminate staining and rotten-egg odor caused by iron, manganese, and hydrogen sulfide.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/get-a-quote?service=Iron%20%26%20Sulfur%20Removal">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-cyan-700 py-8 text-white">
          <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">Ready for better water?</h3>
              <p className="text-white/90">Schedule your free water test today.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="secondary" className="bg-white text-cyan-800 hover:bg-white/90">
                <Link href="/contact">Request Free Test</Link>
              </Button>
              <a
                href="tel:3522380503"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                352-238-0503
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
