import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskConical, CheckCircle, Phone, ArrowLeft, Droplets } from "lucide-react"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ReverseOsmosisPage() {
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
                  <FlaskConical className="h-4 w-4" />
                  Premium Drinking Water
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Reverse Osmosis</h1>
                <p className="mt-4 text-lg text-slate-600">
                  Get bottle-quality drinking water right from your tap. Our reverse osmosis systems remove up to 99% of
                  contaminants for the purest, best-tasting water possible.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/get-a-quote?service=Reverse%20Osmosis">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Schedule Water Test</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/reverse-osmosis.webp"
                  alt="Under-sink reverse osmosis system with storage tank and three-stage filter"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Reverse Osmosis Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is Reverse Osmosis?
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Reverse osmosis is the most effective water purification technology available, using a semi-permeable
                membrane to remove virtually all contaminants from your drinking water.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Pre-Filtration</h3>
                <p className="text-slate-600">
                  Water passes through sediment and carbon filters to remove chlorine, sediment, and larger particles.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">RO Membrane</h3>
                <p className="text-slate-600">
                  Water is forced through a microscopic membrane that blocks contaminants while allowing pure water
                  through.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <span className="text-2xl font-bold text-blue-700">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Final Polish</h3>
                <p className="text-slate-600">
                  A final carbon filter removes any remaining tastes or odors, delivering crystal-clear, great-tasting
                  water.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contaminants Removed Section */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What RO Systems Remove
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Reverse osmosis removes up to 99% of dissolved solids and contaminants, including many that other
                filtration methods can't touch.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Heavy Metals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Lead, mercury, arsenic, chromium, and other toxic metals.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Chemicals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Chlorine, fluoride, pesticides, herbicides, and industrial chemicals.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Bacteria & Viruses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Harmful microorganisms that can cause illness and disease.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Total Dissolved Solids</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Salts, minerals, and other dissolved particles that affect taste.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Nitrates & Nitrites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Agricultural runoff contaminants that can be harmful to health.</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Pharmaceutical Residues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Trace amounts of medications that pass through water treatment plants.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Benefits of RO Water
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Experience the difference that ultra-pure water makes in your daily life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Superior Taste</h3>
                    <p className="text-slate-600">
                      Crystal-clear water with no chlorine taste, odors, or aftertaste - just pure, refreshing water.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Better Health</h3>
                    <p className="text-slate-600">
                      Remove harmful contaminants while retaining beneficial minerals for optimal health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Cost Savings</h3>
                    <p className="text-slate-600">
                      Stop buying bottled water - get unlimited pure water for pennies per gallon.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Better Cooking</h3>
                    <p className="text-slate-600">
                      Pure water enhances the natural flavors of food, coffee, tea, and other beverages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Environmental Benefits</h3>
                    <p className="text-slate-600">
                      Reduce plastic waste by eliminating the need for bottled water purchases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Convenience</h3>
                    <p className="text-slate-600">
                      Pure water on demand - no more heavy bottles to carry or storage space needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Ice & Beverages</h3>
                    <p className="text-slate-600">
                      Crystal-clear ice cubes and better-tasting beverages made with pure water.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Peace of Mind</h3>
                    <p className="text-slate-600">
                      Know that your family is drinking the purest, safest water possible every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Features Section */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">System Features</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Our reverse osmosis systems are designed for reliability, efficiency, and ease of use.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <Droplets className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Stage Filtration</h3>
                <p className="text-slate-600">3-5 stage filtration process ensures maximum contaminant removal.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <FlaskConical className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">High-Quality Membrane</h3>
                <p className="text-slate-600">Premium RO membrane with 2-3 year lifespan and 99% rejection rate.</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Easy Maintenance</h3>
                <p className="text-slate-600">
                  Simple filter changes with color-coded cartridges and clear instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-700 py-12 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ready for Pure, Great-Tasting Water?</h2>
            <p className="mt-4 text-xl text-white/90">
              Get a free water test and see how much you could save with a reverse osmosis system.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-800 hover:bg-white/90">
                <Link href="/get-a-quote?service=Reverse%20Osmosis">Get Free Quote</Link>
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
