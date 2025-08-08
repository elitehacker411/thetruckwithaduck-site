"use client"

import type { Metadata } from "next"
import GetAQuoteClient from "./get-a-quote-client"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Get a Quote — Trucks with a duck",
  description: "Request a tailored quote for water treatment systems and installation.",
}

export default function Page() {
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
              {/* Server Component: returns the interactive Client Component */}
              <GetAQuoteClient />
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
