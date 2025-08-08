"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Phone, Menu } from 'lucide-react'
import Image from "next/image"

export default function SiteHeader() {
  const [solution, setSolution] = useState("Solutions")
  const router = useRouter()

  const nav = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ]

  const solutions = ["Residential", "Office", "Commercial", "Industrial"]

  return (
    <header className="w-full">
      {/* Top bar (desktop only) */}
      <div className="hidden w-full bg-slate-800 px-4 py-2 text-xs text-white sm:block">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">
          <p className="opacity-90">Providing better quality water to all of United States!</p>
          <div className="flex items-center gap-2">
            <select
              aria-label="Solutions"
              value={solution}
              onChange={(e) => {
                const val = e.target.value
                setSolution(val)
                if (val && val !== "Solutions") {
                  router.push(`/contact?service=${encodeURIComponent(val)}`)
                }
              }}
              className="rounded-md bg-slate-700/70 px-2 py-1 text-xs"
            >
              <option>Solutions</option>
              {solutions.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
            <a
              href="tel:3522380503"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-700 px-3 py-1 font-semibold hover:bg-cyan-800"
            >
              <Phone className="h-4 w-4" />
              352-238-0503
            </a>
            <Button asChild className="hidden bg-cyan-600 hover:bg-cyan-700 md:inline-flex">
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main nav (always visible) */}
      <div className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/duck-logo.webp"
              alt="Trucks with a duck logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
              priority
            />
            <span className="text-lg font-extrabold tracking-tight">
              Trucks <span className="text-cyan-700">with</span> a duck
            </span>
            <span className="sr-only">Trucks with a duck</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-cyan-700">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="outline">
              <Link href="/contact">Free Water Test</Link>
            </Button>
            <a
              href="tel:3522380503"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-800"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="mt-6 space-y-6">
                  <Link href="/" className="block text-base font-semibold">
                    Home
                  </Link>
                  <Link href="/about" className="block text-base font-semibold">
                    About
                  </Link>
                  <Link href="/contact-us" className="block text-base font-semibold">
                    Contact
                  </Link>
                  <div className="space-y-2">
                    <label className="text-xs uppercase text-slate-500">Solutions</label>
                    <Input placeholder="Search products or concerns" />
                    <div className="flex flex-wrap gap-2 text-sm">
                      {solutions.map((l) => (
                        <span key={l} className="rounded-full bg-slate-100 px-2 py-1">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-cyan-700 hover:bg-cyan-800">
                    <Link href="/contact">Free Water Test</Link>
                  </Button>
                  <a
                    href="tel:3522380503"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    <Phone className="h-4 w-4" />
                    352-238-0503
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
