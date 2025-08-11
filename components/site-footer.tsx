import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Trucks with a duck. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4">
          <Link href="#" className="text-xs text-slate-600 hover:underline">
            Terms
          </Link>
          <Link href="#" className="text-xs text-slate-600 hover:underline">
            Privacy
          </Link>
          <Link href="/qr" className="text-xs text-slate-600 hover:underline">
            QR Code
          </Link>
          <Link href="/contact" className="text-xs text-slate-600 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
