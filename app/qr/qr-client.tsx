"use client"

import { useRef, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Download, LinkIcon, RotateCcw } from "lucide-react"

export default function QRClient() {
  const homeUrl =
    typeof window !== "undefined" ? `${window.location.origin}/` : "https://thetruckwithaduck-site.vercel.app/"
  const normalizedUrl = homeUrl

  const [size, setSize] = useState<number>(320)
  const [fg, setFg] = useState<string>("#0e7490")
  const [bg, setBg] = useState<string>("#ffffff")
  const [copied, setCopied] = useState<boolean>(false)
  const svgRef = useRef<SVGSVGElement | null>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(normalizedUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // fallback
      const textarea = document.createElement("textarea")
      textarea.value = normalizedUrl
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  const downloadSVG = () => {
    if (!svgRef.current) return
    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svgRef.current)
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
    const urlBlob = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = urlBlob
    a.download = "qr-code.svg"
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(urlBlob)
  }

  const downloadPNG = async () => {
    if (!svgRef.current) return
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svgRef.current)
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
    const svgUrl = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const padding = 24
      const canvas = document.createElement("canvas")
      canvas.width = size + padding * 2
      canvas.height = size + padding * 2
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      ctx.fillStyle = bg || "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, padding, padding, size, size)
      URL.revokeObjectURL(svgUrl)

      canvas.toBlob(
        (blob) => {
          if (!blob) return
          const urlObj = URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = urlObj
          a.download = "qr-code.png"
          document.body.appendChild(a)
          a.click()
          a.remove()
          URL.revokeObjectURL(urlObj)
        },
        "image/png",
        1,
      )
    }
    img.onerror = () => {
      URL.revokeObjectURL(svgUrl)
      // Silently fail; user can try SVG
    }
    img.src = svgUrl
  }

  const resetDefaults = () => {
    setSize(320)
    setFg("#0e7490")
    setBg("#ffffff")
  }

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <LinkIcon className="h-5 w-5 text-cyan-700" />
              QR Code to Home Page
            </CardTitle>
            <p className="mt-2 text-sm text-slate-600">
              Scan to open the landing page. Download as PNG for quick sharing or SVG for print.
            </p>
          </CardHeader>

          <CardContent>
            <div className="grid gap-8 md:grid-cols-5">
              {/* Controls */}
              <div className="md:col-span-2 space-y-6">
                {/* Destination (read-only) */}
                <div className="space-y-2">
                  <Label>Destination</Label>
                  <div className="flex items-center justify-between gap-2 rounded-md border bg-slate-50 px-3 py-2">
                    <code className="truncate text-xs sm:text-sm" title={normalizedUrl}>
                      {normalizedUrl}
                    </code>
                    <Button type="button" variant="outline" size="sm" onClick={handleCopy} aria-label="Copy URL">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-500">
                    {copied ? "Copied!" : "This QR always routes to your home page."}
                  </p>
                </div>

                {/* Size + Presets */}
                <div className="space-y-2">
                  <Label htmlFor="qr-size">Size (px)</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="qr-size"
                      type="number"
                      min={160}
                      max={1024}
                      step={16}
                      value={size}
                      onChange={(e) => setSize(Number.parseInt(e.target.value || "320", 10))}
                      className="max-w-[140px]"
                    />
                    <div className="flex flex-wrap gap-2">
                      {[256, 320, 512].map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={size === preset ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSize(preset)}
                        >
                          {preset}px
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Foreground</Label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={fg}
                        onChange={(e) => setFg(e.target.value)}
                        aria-label="Foreground color"
                        className="h-9 w-12 cursor-pointer rounded border"
                      />
                      <code className="rounded bg-slate-100 px-2 py-1 text-xs">{fg}</code>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Background</Label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                        aria-label="Background color"
                        className="h-9 w-12 cursor-pointer rounded border"
                      />
                      <code className="rounded bg-slate-100 px-2 py-1 text-xs">{bg}</code>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button type="button" className="bg-cyan-700 hover:bg-cyan-800" onClick={downloadPNG}>
                    <Download className="mr-2 h-4 w-4" /> Download PNG
                  </Button>
                  <Button type="button" variant="outline" onClick={downloadSVG}>
                    <Download className="mr-2 h-4 w-4" /> Download SVG
                  </Button>
                  <Button type="button" variant="ghost" onClick={resetDefaults}>
                    <RotateCcw className="mr-2 h-4 w-4" /> Reset
                  </Button>
                </div>
              </div>

              {/* Preview */}
              <div className="md:col-span-3">
                <div className="flex h-full w-full items-center justify-center">
                  <figure className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="overflow-auto">
                      <div
                        className="mx-auto"
                        style={{
                          width: size + 32,
                          height: size + 32,
                        }}
                      >
                        <QRCodeSVG
                          ref={svgRef as any}
                          value={normalizedUrl}
                          size={size}
                          fgColor={fg}
                          bgColor={bg}
                          includeMargin={false}
                          level="M"
                          aria-label={`QR code linking to ${normalizedUrl}`}
                        />
                      </div>
                    </div>
                    <figcaption
                      className="mt-3 max-w-[28rem] truncate text-center text-xs text-slate-500"
                      title={normalizedUrl}
                    >
                      {normalizedUrl}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
