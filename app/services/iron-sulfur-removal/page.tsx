import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, CheckCircle, Phone, ArrowLeft, AlertTriangle } from "lucide-react"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function IronSulfurRemovalPage() {
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
                  <ShieldCheck className="h-4 w-4" />
                  Specialized Treatment
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Iron & Sulfur Removal
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  Eliminate rust stains, metallic taste, and rotten egg odor from your water. Our specialized systems
                  target iron, manganese, and hydrogen sulfide for crystal-clear, odor-free water.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/get-a-quote?service=Iron%20%26%20Sulfur%20Removal">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Schedule Water Test</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/iron-sulfur.webp"
                  alt="Under-sink filtration setup with multiple canisters, plumbing, and disposal unit"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Signs You Need Iron & Sulfur Removal
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Iron, manganese, and hydrogen sulfide create distinctive problems that affect your water's appearance,
                taste, and smell.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Rust Stains</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Orange, red, or brown stains on fixtures, laundry, and surfaces caused by iron in the water.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Rotten Egg Odor</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Strong sulfur smell from hydrogen sulfide gas, especially noticeable in hot water.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Metallic Taste</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Unpleasant metallic or bitter taste in drinking water, coffee, and food preparation.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Black Stains</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Dark stains on fixtures and laundry caused by manganese, often appearing as black streaks.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Cloudy Water</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Water appears cloudy, discolored, or has visible particles when first drawn from taps.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <CardTitle className="text-red-600">Appliance Damage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Premature failure of water heaters, dishwashers, and washing machines due to mineral buildup.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How Our Systems Work
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We use advanced oxidation and filtration technology to effectively remove iron, manganese, and hydrogen
                sulfide from your water supply.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Oxidation</h3>
                <p className="text-slate-600">
                  Air injection or chemical oxidation converts dissolved iron and manganese into particles that can be
                  filtered out.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Filtration</h3>
                <p className="text-slate-600">
                  Specialized filter media captures oxidized particles and removes hydrogen sulfide gas from the water.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Backwash</h3>
                <p className="text-slate-600">
                  Automatic backwashing cleans the filter media, ensuring consistent performance and long system life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of Iron & Sulfur Removal
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Enjoy clean, clear, odor-free water throughout your entire home with our specialized treatment systems.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">No More Stains</h3>
                    <p className="text-slate-600">
                      Eliminate rust and black stains on fixtures, laundry, and surfaces throughout your home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Odor-Free Water</h3>
                    <p className="text-slate-600">
                      Remove the rotten egg smell from hydrogen sulfide for pleasant, fresh-smelling water.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Better Taste</h3>
                    <p className="text-slate-600">
                      Eliminate metallic and bitter tastes for better-tasting drinking water, coffee, and food.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Cleaner Laundry</h3>
                    <p className="text-slate-600">
                      Whites stay white and colors stay bright without iron and manganese staining.
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
                      Extend the life of water heaters, dishwashers, and washing machines by preventing mineral buildup.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Crystal Clear Water</h3>
                    <p className="text-slate-600">
                      Enjoy clear, sparkling water from every tap without cloudiness or discoloration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Reduced Cleaning</h3>
                    <p className="text-slate-600">
                      Spend less time scrubbing stains from toilets, sinks, and shower surfaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Whole-House Solution</h3>
                    <p className="text-slate-600">
                      Treat all the water entering your home for consistent quality at every tap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Types Section */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Treatment Options</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We offer different treatment methods based on your specific water chemistry and contamination levels.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Air Injection Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Uses air to oxidize iron and sulfur, then filters out the particles. Effective for moderate levels.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• No chemicals required</li>
                    <li>• Low maintenance</li>
                    <li>• Environmentally friendly</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Catalytic Carbon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Specialized carbon media that removes hydrogen sulfide and light iron levels through adsorption.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Excellent for sulfur odor</li>
                    <li>• Improves taste and smell</li>
                    <li>• Compact design</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Oxidizing Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Advanced media that oxidizes and filters iron, manganese, and sulfur in a single tank system.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Handles high iron levels</li>
                    <li>• Self-regenerating media</li>
                    <li>• Automatic operation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-700 py-12 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Eliminate Iron & Sulfur Problems?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Get a free water test to determine the best treatment solution for your specific water issues.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-800 hover:bg-white/90">
                <Link href="/get-a-quote?service=Iron%20%26%20Sulfur%20Removal">Get Free Quote</Link>
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
