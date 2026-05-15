import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Users } from "lucide-react";
import { useEffect, useState } from "react";
import PerformanceQRCode from "@/components/PerformanceQRCode";
import {
  listPerformanceLeads,
  type PerformanceLead,
} from "@/lib/performanceLeads";

export default function AdminPage() {
  const [leads, setLeads] = useState<PerformanceLead[]>([]);

  useEffect(() => {
    setLeads(listPerformanceLeads());
  }, []);

  return (
    <>
      <Helmet>
        <title>Admin · Marketing Tools | Ageless Living™</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-5 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to site
            </Link>
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-200/80 font-semibold">
              Admin · Marketing
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-16 py-12 md:py-20">
          <div className="mb-10 md:mb-14">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.05] mb-3">
              Performance Packages — Print Kit
            </h1>
            <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              Grab a print-ready QR code that links straight to{" "}
              <Link
                to="/performance-packages"
                className="text-amber-200 hover:underline underline-offset-4"
              >
                /performance-packages
              </Link>
              . Use the PNG for banners and flyers, or the SVG for vector
              workflows. Below is a snapshot of leads captured so far.
            </p>
          </div>

          <div className="grid lg:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
            {/* QR */}
            <div>
              <PerformanceQRCode />
              <a
                href="/performance-packages"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors"
              >
                Preview destination
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Leads */}
            <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-7 md:p-9">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                    <Users className="h-4 w-4 text-amber-200" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      Captured Leads
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Local snapshot — connect{" "}
                      <code className="text-neutral-300">/api/performance-interest</code>{" "}
                      to your DB for production storage.
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-200/10 text-amber-200 text-xs px-3 py-1 font-semibold">
                  {leads.length}
                </span>
              </div>

              {leads.length === 0 ? (
                <p className="text-sm text-neutral-500 py-10 text-center">
                  No leads captured yet. Share the QR code at your next show.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-[10px] uppercase tracking-[0.18em] text-neutral-500 border-b border-white/10">
                        <th className="py-2 pr-4">Name</th>
                        <th className="py-2 pr-4">Email</th>
                        <th className="py-2 pr-4">Phone</th>
                        <th className="py-2 pr-4">Package</th>
                        <th className="py-2">Submitted</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads
                        .slice()
                        .reverse()
                        .map((l) => (
                          <tr
                            key={l.id}
                            className="border-b border-white/5 last:border-0"
                          >
                            <td className="py-3 pr-4 text-white">
                              {l.fullName}
                            </td>
                            <td className="py-3 pr-4 text-neutral-300">
                              {l.email}
                            </td>
                            <td className="py-3 pr-4 text-neutral-300">
                              {l.phone}
                            </td>
                            <td className="py-3 pr-4">
                              <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-200">
                                {l.package}
                              </span>
                            </td>
                            <td className="py-3 text-neutral-500 text-xs">
                              {new Date(l.createdAt).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
