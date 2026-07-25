"use client";
import React from "react";
import { Layout, PageHero, CTABlock } from "@/components/shared";
const { useState, useEffect, useRef } = React;

// ── Real client work. To add/remove a site, edit this one array. ──────────────
// Each entry renders a live preview (a real, current thumbnail of the site).
// Keep `note` factual — what was actually built.
const CLIENTS = [
  {
    name: "Dr. Detail",
    trade: "Auto Detailing",
    location: "Fargo, ND",
    url: "https://drdetail.vercel.app",
    note: "Fast, mobile-first site built to book detailing jobs.",
  },
  {
    name: "Premium Concrete",
    trade: "Concrete & Masonry",
    location: "Metro Detroit, MI",
    url: "https://premium-concrete-roan.vercel.app",
    note: "Service + gallery site with lead-capture form.",
  },
  {
    name: "Emmanuel Constructions",
    trade: "Framing & Construction",
    location: "Sterling Heights, MI",
    url: "https://emmanuel-constructions-kappa.vercel.app",
    note: "Clean contractor site built to turn visits into calls.",
  },
];

// Live, self-scaling preview of a site. Renders the real page in an iframe sized
// to a desktop viewport, then scales it to fit the card. It's display-only —
// pointer events are disabled so it reads as a thumbnail, not a link.
function SitePreview({ url }) {
  const boxRef = useRef(null);
  const [scale, setScale] = useState(0.5);
  const DESIGN_W = 1280;
  const DESIGN_H = 800;
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div
      ref={boxRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        background: "hsl(var(--muted))",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      <iframe
        src={url}
        title={url}
        loading="lazy"
        tabIndex={-1}
        scrolling="no"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: DESIGN_W,
          height: DESIGN_H,
          border: 0,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

function WorkCard({ name, trade, location, url, note }) {
  return (
    <div
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <SitePreview url={url} />
      <div style={{ padding: "20px 22px 22px" }}>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>{name}</div>
        <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 3, fontFamily: "var(--font-mono)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
          {trade} · {location}
        </div>
        <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.55, margin: "12px 0 0" }}>
          {note}
        </p>
      </div>
    </div>
  );
}

function WorkPage() {
  const twoCol = typeof window !== "undefined" && window.innerWidth >= 760;
  return (
    <Layout active="">
      <PageHero
        eyebrow="SELECTED WORK"
        title={<>Sites we've <span style={{ color: "hsl(var(--muted-foreground))" }}>actually built.</span></>}
        sub="A private look at real, live client sites we've designed and built — the exact quality of work you'd get."
        cta="Get a site like these"
      />

      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: twoCol ? "1fr 1fr" : "1fr",
              gap: 24,
            }}
          >
            {CLIENTS.map((c) => (
              <WorkCard key={c.url} {...c} />
            ))}
          </div>

          <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 28, maxWidth: 640, lineHeight: 1.6 }}>
            This page is private — it isn't linked from the main menu or indexed by search engines.
          </p>
        </div>
      </section>

      <CTABlock
        title="Want one built for your business?"
        sub="20-minute call. We'll show you exactly what your site could look like — and what it'd do for your booked jobs."
        cta="Book a 20-min call"
      />
    </Layout>
  );
}

export default WorkPage;
