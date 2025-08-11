import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, CheckCircle, Phone, ArrowLeft } from "lucide-react"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function WaterSoftenersPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-cyan-50 to-white py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-6">
              <Button asChild variant="ghost" className="text-cyan-700 hover:text-cyan-800">
                <Link href="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Services
                </Link>
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">
                  <Droplets className="h-4 w-4" />
                  Water Treatment Solution
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Water Softeners</h1>
                <p className="mt-4 text-lg text-slate-600">
                  Transform your hard water into soft, luxurious water that protects your home, saves you money, and
                  makes everything feel better.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/get-a-quote?service=Water%20Softeners">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Schedule Water Test</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/water-softener.webp"
                  alt="Outdoor water softener system with brine tank and resin tank"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Hard Water Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What is Hard Water?</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Hard water contains high levels of dissolved minerals like calcium and magnesium. While not harmful to
                drink, it causes numerous problems throughout your home.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Scale Buildup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    White, chalky deposits on faucets, showerheads, and appliances that reduce efficiency and lifespan.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Soap Scum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Sticky film on shower doors, bathtubs, and dishes that's difficult to clean and leaves spots.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Dry Skin & Hair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Minerals strip natural oils, leaving skin feeling dry and hair looking dull and lifeless.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Stiff Laundry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Clothes feel rough and colors fade faster due to mineral deposits trapped in fabric fibers.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Higher Energy Bills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Scale buildup in water heaters and appliances reduces efficiency, increasing energy consumption.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Appliance Damage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Premature failure of dishwashers, washing machines, and water heaters due to mineral buildup.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Soft Water
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Experience the difference soft water makes in every aspect of your daily life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Softer Skin & Hair</h3>
                    <p className="text-slate-600">
                      Natural oils are preserved, leaving skin feeling smooth and hair looking shiny and manageable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Cleaner Dishes & Glassware</h3>
                    <p className="text-slate-600">
                      No more water spots or film - dishes come out sparkling clean every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Brighter, Softer Laundry</h3>
                    <p className="text-slate-600">
                      Clothes feel softer, colors stay vibrant longer, and you'll use less detergent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Easier Cleaning</h3>
                    <p className="text-slate-600">
                      Less scrubbing needed - soap and cleaners work more effectively with soft water.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Protected Appliances</h3>
                    <p className="text-slate-600">
                      Extend the life of water heaters, dishwashers, and washing machines by preventing scale buildup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Lower Energy Bills</h3>
                    <p className="text-slate-600">
                      Appliances run more efficiently without mineral buildup, reducing energy consumption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Reduced Soap Usage</h3>
                    <p className="text-slate-600">
                      Soap lathers better in soft water, so you'll use up to 50% less soap and detergent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Spot-Free Surfaces</h3>
                    <p className="text-slate-600">
                      No more water spots on faucets, shower doors, or car surfaces after washing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How Water Softeners Work
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Our water softeners use a proven ion exchange process to remove hardness minerals from your water
                supply.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Ion Exchange</h3>
                <p className="text-slate-600">
                  Hard water flows through resin beads that capture calcium and magnesium ions, replacing them with
                  sodium ions.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Soft Water Delivery</h3>
                <p className="text-slate-600">
                  Softened water flows to all fixtures and appliances throughout your home, providing immediate
                  benefits.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Automatic Regeneration</h3>
                <p className="text-slate-600">
                  The system automatically cleans and recharges itself using salt, ensuring continuous soft water
                  production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-700 py-12 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to Experience Soft Water?</h2>
            <p className="mt-4 text-xl text-white/90">Get a free water test and personalized quote for your home.</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-800 hover:bg-white/90">
                <Link href="/get-a-quote?service=Water%20Softeners">Get Free Quote</Link>
              </Button>
              <a
                href="tel:3522380503"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-lg font-medium hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call 352-238-0503
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
