"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock, useViewportWidth } from "@/components/shared";
const { useState, useEffect, useRef } = React;

// ═══════════════════════════════════════════════════════════════════════════
// ⚠️  PLACEHOLDER — REPLACE WITH YOUR OWN CLIENT SITES BEFORE SHARING.
//
// Each entry renders a live preview of the real URL, so only list sites you
// actually built and have permission to show. Delete the array (and the grid
// below) until you have work to show — an empty portfolio beats a fake one.
//
// This page is intentionally unlisted: it isn't in the nav and it's marked
// noindex in app/work/page.jsx, so it's safe to share as a direct link.
// ═══════════════════════════════════════════════════════════════════════════
const CLIENTS = [
  // {
  //   name: "Example Construction Co.",
  //   trade: "General Contracting",
  //   location: "City, ST",
  //   url: "https://example.com",
  //   note: "Service-area site with project gallery and quote forms.",
  // },
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
  const vw = useViewportWidth();
  const twoCol = vw >= 760;
  return (
    <Layout active="">
      <PageHero
        eyebrow="SELECTED WORK"
        title={<>Sites we've <span style={{ color: "hsl(var(--muted-foreground))" }}>actually built.</span></>}
        sub="A private look at live contractor sites we've designed and built — the exact standard of work you'd get."
        cta="Get a site like these"
      />

      <section className="cc-section cc-section--card">
        <div className="cc-container">
          {CLIENTS.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: twoCol ? "1fr 1fr" : "1fr", gap: 24 }}>
              {CLIENTS.map((c) => <WorkCard key={c.url} {...c} />)}
            </div>
          ) : (
            <div style={{
              padding: "64px 32px",
              textAlign: "center",
              border: "1px dashed hsl(var(--border-strong))",
              borderRadius: 20,
              color: "hsl(var(--muted-foreground))",
            }}>
              <div style={{ color: "hsl(var(--accent))", marginBottom: 16 }}>
                <Icon.blueprint size={28} style={{ margin: "0 auto" }} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 17, color: "hsl(var(--foreground))", marginBottom: 8 }}>
                No client sites listed yet
              </div>
              <p style={{ margin: "0 auto", maxWidth: 460, fontSize: 14.5, lineHeight: 1.6 }}>
                We're putting this page together. Ask us on your call and we'll walk you
                through the sites we've built and the results they're producing.
              </p>
            </div>
          )}

          <p style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 28, maxWidth: 640, lineHeight: 1.6 }}>
            This page is private — it isn't linked from the main menu and it isn't indexed by search engines.
          </p>
        </div>
      </section>

      <CTABlock
        title="Want one built for your company?"
        sub="20-minute call. We'll show you what your site could look like — and what it'd do for your booked estimates."
        cta="Book a 20-min call"
      />
    </Layout>
  );
}

export default WorkPage;
