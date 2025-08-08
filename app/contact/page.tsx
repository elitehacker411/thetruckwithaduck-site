import type { Metadata } from "next"
import ContactPageClient from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contact — Trucks with a duck",
  description: "Request a free water test, quote, or service visit.",
}

export default function Page() {
  // Server Component: returns the interactive Client Component
  return <ContactPageClient />
}
