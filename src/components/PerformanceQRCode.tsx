import { useCallback, useMemo, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download, Link as LinkIcon, Printer } from "lucide-react";

type Props = {
  /** Absolute or relative URL the QR code resolves to. */
  url?: string;
  /** Pixel size of the rendered SVG inside the card (display only). */
  size?: number;
  /** Pixel size of the downloaded PNG (high-res for print). */
  exportSize?: number;
  /** Caption displayed under the code. */
  caption?: string;
  className?: string;
};

const DEFAULT_RELATIVE = "/performance-packages";

function resolveUrl(input?: string): string {
  if (!input) {
    if (typeof window !== "undefined") {
      return new URL(DEFAULT_RELATIVE, window.location.origin).toString();
    }
    return DEFAULT_RELATIVE;
  }
  if (/^https?:\/\//i.test(input)) return input;
  if (typeof window !== "undefined") {
    return new URL(input, window.location.origin).toString();
  }
  return input;
}

export default function PerformanceQRCode({
  url,
  size = 256,
  exportSize = 1024,
  caption = "Scan to view Ageless Living™ Performance Packages",
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const resolved = useMemo(() => resolveUrl(url), [url]);

  const handleDownload = useCallback(() => {
    const svgEl = containerRef.current?.querySelector("svg");
    if (!svgEl) return;

    const clone = svgEl.cloneNode(true) as SVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const xml = new XMLSerializer().serializeToString(clone);
    const svgBlob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const objectUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = exportSize;
      canvas.height = exportSize;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, exportSize, exportSize);
      ctx.drawImage(img, 0, 0, exportSize, exportSize);
      URL.revokeObjectURL(objectUrl);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "ageless-living-performance-packages-qr.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
      }, "image/png");
    };
    img.src = objectUrl;
  }, [exportSize]);

  const handleDownloadSvg = useCallback(() => {
    const svgEl = containerRef.current?.querySelector("svg");
    if (!svgEl) return;
    const clone = svgEl.cloneNode(true) as SVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const xml = new XMLSerializer().serializeToString(clone);
    const blob = new Blob([xml], { type: "image/svg+xml;charset=utf-8" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "ageless-living-performance-packages-qr.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(resolved);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable in some browsers/contexts — silently
      // ignore; the URL is still visible in the UI for manual copy.
    }
  }, [resolved]);

  return (
    <div
      className={`rounded-3xl bg-white text-neutral-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] p-6 md:p-8 max-w-sm w-full ${className}`}
    >
      <div
        ref={containerRef}
        className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5"
      >
        <QRCodeSVG
          value={resolved}
          size={size}
          level="H"
          marginSize={2}
          fgColor="#0b0b0b"
          bgColor="#ffffff"
        />
      </div>

      <p className="mt-5 text-center text-xs uppercase tracking-[0.24em] text-neutral-500 font-semibold">
        Performance Packages
      </p>
      <p className="mt-1 text-center text-sm text-neutral-700 leading-snug">
        {caption}
      </p>

      <button
        type="button"
        onClick={handleCopy}
        className="mt-4 w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 transition-colors text-xs"
      >
        <span className="flex items-center gap-2 min-w-0">
          <LinkIcon className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
          <span className="truncate text-neutral-700">{resolved}</span>
        </span>
        <span className="text-neutral-500 font-semibold shrink-0">
          {copied ? "Copied" : "Copy"}
        </span>
      </button>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-black transition-colors"
        >
          <Download className="h-3.5 w-3.5" /> PNG (Print)
        </button>
        <button
          type="button"
          onClick={handleDownloadSvg}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-neutral-300 text-neutral-900 text-xs font-semibold uppercase tracking-[0.16em] hover:bg-neutral-50 transition-colors"
        >
          <Printer className="h-3.5 w-3.5" /> SVG (Vector)
        </button>
      </div>

      <p className="mt-3 text-center text-[10px] text-neutral-400">
        High-res PNG is {exportSize}×{exportSize}px. SVG scales infinitely
        for banners and flyers.
      </p>
    </div>
  );
}
