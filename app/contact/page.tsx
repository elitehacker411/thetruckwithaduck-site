import { Suspense } from "react"
import ContactPageClient from "./contact-page-client"

export default function Page() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center">Loading...</div>}>
      <ContactPageClient />
    </Suspense>
  )
}
