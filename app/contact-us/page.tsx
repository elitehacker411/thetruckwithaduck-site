import type { Metadata } from "next"
import ContactUsClient from "./contact-us-client"

export const metadata: Metadata = {
  title: "Contact Us — Trucks with a duck",
  description: "Get in touch with our water treatment specialists.",
}

export default function Page() {
  // Server Component: returns the interactive Client Component
  return <ContactUsClient />
}
