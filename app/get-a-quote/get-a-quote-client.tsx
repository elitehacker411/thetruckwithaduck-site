"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function GetAQuoteClient() {
  const [sent, setSent] = useState(false)
  const searchParams = useSearchParams()
  const prefillService = searchParams.get("service") || ""

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 600))
    setSent(true)
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Get a Quote</h1>
            <p className="mt-2 text-slate-600">
              Share a few details and we&apos;ll prepare a personalized quote for your home or business.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <form onSubmit={onSubmit} className="space-y-4 rounded-lg border p-6 shadow-sm lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(352) 238-0503" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" name="zip" inputMode="numeric" placeholder="12345" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="Water softener, RO, whole-house filter, iron removal..."
                      defaultValue={prefillService}
                    />
                  </div>
                  <div>
                    <Label htmlFor="concerns">Water Concerns</Label>
                    <Input id="concerns" name="concerns" placeholder="Hard water, staining, taste/odor, chlorine..." />
                  </div>
                </div>
                <div>
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="# of bathrooms, occupants, well or city water, current equipment, install location..."
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">We typically reply the same day.</p>
                  <Button className="bg-cyan-700 hover:bg-cyan-800" type="submit">
                    Get Quote
                  </Button>
                </div>
                {sent && (
                  <p role="status" className="rounded-md bg-green-50 p-3 text-sm text-green-700">
                    Thanks! Your request has been received. We&apos;ll send your quote shortly.
                  </p>
                )}
              </form>

              <aside className="space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold">Fast, accurate estimates</h2>
                  <p className="text-slate-700">
                    Quotes include equipment, professional installation, and warranty options. We&apos;ll confirm final
                    pricing after an in-home evaluation or water test if needed.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Prefer to talk?</h2>
                  <p className="text-slate-700">Call us and we can start your quote by phone.</p>
                  <a
                    href="tel:3522380503"
                    className="mt-2 inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    352-238-0503
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
