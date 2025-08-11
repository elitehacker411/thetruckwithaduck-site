import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, CheckCircle, Phone, ArrowLeft, Home, Shield } from "lucide-react"
import Image from "next/image"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function WholeHouseFiltrationPage() {
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
                  <Filter className="h-4 w-4" />
                  Complete Home Protection
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                  Whole-House Filtration
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  Clean, filtered water from every tap in your home. Remove chlorine, sediment, and contaminants to
                  protect your family and extend the life of your appliances.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
                    <Link href="/get-a-quote?service=Whole-House%20Filtration">Get Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Schedule Water Test</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/whole-house-filtration.webp"
                  alt="Whole-house filtration system with softener and filter tanks installed in a garage"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Whole-House Filtration Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What is Whole-House Filtration?
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                A whole-house filtration system treats all the water entering your home at the point where it comes in,
                ensuring every tap, shower, and appliance receives clean, filtered water.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Home className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Point of Entry</h3>
                <p className="text-slate-600">
                  Installed where water enters your home, treating 100% of your water supply before it reaches any
                  fixture.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Filter className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Multi-Stage Filtration</h3>
                <p className="text-slate-600">
                  Multiple filter stages remove different contaminants including sediment, chlorine, and chemical
                  impurities.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Complete Protection</h3>
                <p className="text-slate-600">
                  Protects your family's health and extends the life of all water-using appliances and fixtures.
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
                What We Remove From Your Water
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Our whole-house systems target the most common water quality issues that affect taste, odor, and the
                health of your home's plumbing system.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Chlorine & Chloramines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Municipal water treatment chemicals that cause taste, odor, and skin irritation issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Sediment & Dirt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Sand, silt, rust particles, and other debris that can clog fixtures and damage appliances.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Volatile Organic Compounds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Industrial chemicals, pesticides, and other organic contaminants that affect water quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Bad Taste & Odor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Chemical tastes, musty odors, and other unpleasant characteristics in your water supply.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Heavy Metals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Lead, copper, and other metals that can leach from pipes and affect water safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-red-600">Scale-Forming Minerals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Calcium and magnesium that create buildup in pipes, fixtures, and water-using appliances.
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
                Benefits Throughout Your Home
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Experience the difference of filtered water from every tap, shower, and appliance in your home.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Better Drinking Water</h3>
                    <p className="text-slate-600">
                      Remove chlorine taste and odor for fresh, clean-tasting water from every tap in your home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Healthier Showers</h3>
                    <p className="text-slate-600">
                      Reduce chlorine exposure during bathing for softer skin and hair, less irritation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Protected Appliances</h3>
                    <p className="text-slate-600">
                      Extend the life of water heaters, dishwashers, washing machines, and other appliances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Cleaner Laundry</h3>
                    <p className="text-slate-600">
                      Clothes come out cleaner and brighter without chlorine and sediment affecting the wash.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Better Cooking</h3>
                    <p className="text-slate-600">
                      Improve the taste of coffee, tea, soups, and other foods made with filtered water.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Reduced Plumbing Issues</h3>
                    <p className="text-slate-600">
                      Prevent sediment buildup and corrosion in pipes, fixtures, and faucets throughout your home.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Spot-Free Dishes</h3>
                    <p className="text-slate-600">
                      Dishwashers work more effectively with filtered water, reducing spots and film on glassware.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Lower Maintenance Costs</h3>
                    <p className="text-slate-600">
                      Reduce repair and replacement costs for appliances and plumbing fixtures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Peace of Mind</h3>
                    <p className="text-slate-600">
                      Know that every drop of water in your home is clean, safe, and properly filtered.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Increased Home Value</h3>
                    <p className="text-slate-600">
                      A whole-house filtration system is a valuable upgrade that appeals to potential buyers.
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
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Filtration System Options
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We offer different filtration technologies to address your specific water quality concerns and budget.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Carbon Filtration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Activated carbon removes chlorine, taste, odor, and many organic chemicals from your water supply.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Excellent chlorine removal</li>
                    <li>• Improves taste and odor</li>
                    <li>• Cost-effective solution</li>
                    <li>• Easy maintenance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Multi-Media Filtration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Combines different filter media to remove sediment, chlorine, and other contaminants in one system.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Comprehensive filtration</li>
                    <li>• Handles multiple issues</li>
                    <li>• Automatic backwashing</li>
                    <li>• Long-lasting media</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle>Combination Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Integrate filtration with water softening for complete water treatment in a single system.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Filtration + softening</li>
                    <li>• Space-saving design</li>
                    <li>• Complete water treatment</li>
                    <li>• Single maintenance schedule</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Professional Installation Process
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Our certified technicians handle every aspect of your whole-house filtration system installation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Water Testing</h3>
                <p className="text-slate-600">
                  Comprehensive analysis to determine the best filtration solution for your water.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">System Design</h3>
                <p className="text-slate-600">
                  Custom system sizing and configuration based on your home's water usage and quality needs.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Professional Installation</h3>
                <p className="text-slate-600">
                  Expert installation with minimal disruption to your daily routine and water service.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <span className="text-2xl font-bold text-cyan-700">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">System Startup</h3>
                <p className="text-slate-600">
                  Complete system testing, programming, and training on operation and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-700 py-12 text-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready for Clean Water Throughout Your Home?
            </h2>
            <p className="mt-4 text-xl text-white/90">
              Get a free water test and personalized quote for a whole-house filtration system.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-800 hover:bg-white/90">
                <Link href="/get-a-quote?service=Whole-House%20Filtration">Get Free Quote</Link>
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
