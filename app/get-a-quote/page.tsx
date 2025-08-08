import { Suspense } from "react"
import GetAQuoteClient from "./get-a-quote-client"

// Ensure this page renders dynamically to avoid prerender errors with search params
export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <Suspense fallback={<div className="flex min-h-dvh items-center justify-center">Loading...</div>}>
      <GetAQuoteClient />
    </Suspense>
  )
}
