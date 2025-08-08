"use client"

import { useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUsClient() {
  const [sent, setSent] = useState(false)

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
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact Us</h1>
            <p className="mt-2 text-slate-600">
              Questions about water quality, systems, or service? Send us a message and we&apos;ll get back to you.
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="General question, service, estimate, etc." />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[140px]" required />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">We typically reply within one business day.</p>
                  <Button className="bg-cyan-700 hover:bg-cyan-800" type="submit">
                    Send Message
                  </Button>
                </div>
                {sent && (
                  <p role="status" className="rounded-md bg-green-50 p-3 text-sm text-green-700">
                    Thanks! Your message has been sent. We&apos;ll be in touch shortly.
                  </p>
                )}
              </form>

              <aside className="space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <h2 className="text-lg font-semibold">Other ways to reach us</h2>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    <li>
                      Email:{" "}
                      <a href="mailto:Brianraysplumbing@gmail.com" className="underline">
                        Brianraysplumbing@gmail.com
                      </a>
                    </li>
                    <li>
                      Phone:{" "}
                      <a href="tel:3522380503" className="underline">
                        352-238-0503
                      </a>
                    </li>
                    <li>Hours: Mon–Fri 8am–6pm, Sat 9am–1pm</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Popular requests</h2>
                  <ul className="list-disc pl-5 text-slate-700">
                    <li>Schedule a free water test</li>
                    <li>Ask about softeners, filtration, or RO</li>
                    <li>Service or salt delivery</li>
                  </ul>
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
