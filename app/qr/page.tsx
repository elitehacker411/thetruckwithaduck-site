import QRClient from "./qr-client"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function QRPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <QRClient />
      </main>
      <SiteFooter />
    </div>
  )
}
