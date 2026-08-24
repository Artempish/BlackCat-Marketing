"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { useViewportWidth } from "@/components/shared";

// ── The two plans, in one place ───────────────────────────────────────────────
// Home, Pricing, and the FAQ all read from here, so a price change is one edit.
export const PLANS = [
  {
    id: "lsa",
    name: "LSA Ads",
    price: 500,
    unit: "/month",
    addendum: "+ ad spend",
    blurb:
      "Google Local Services Ads, managed end to end. You appear above the map pack with the Google Guaranteed badge, and you pay Google per lead — not per click.",
    spendNote: `We run to a $50/day ceiling — roughly $1,500/month in ad spend — which is what most contractors need to hit the lead target. Want more volume? Raise the daily budget any time. The $500 management fee doesn't move.`,
    guarantee: "5 leads in your first 30 days, or we cover the ad spend until you get there.",
    features: [
      "Google Guaranteed application, start to finish",
      "License, insurance & background-check paperwork handled",
      "Campaign build: job types, service areas, budget pacing",
      "Daily bid & budget management",
      "Junk-lead disputes filed for you, every week",
      "Call tracking and lead-quality scoring",
      "Weekly optimization, monthly reporting",
    ],
    cta: "Start with LSA",
  },
  {
    id: "growth",
    name: "Website, SEO & GMB",
    price: 5000,
    unit: "/month",
    addendum: "all in",
    blurb:
      "The whole organic side: a website built to book estimates, a full local SEO program, and your Google Business Profile managed to rank in the top 3.",
    spendNote:
      "No setup fee, no build fee, no per-page charges. Hosting, revisions, content, and reporting are all inside the monthly fee.",
    guarantee: `Top 3 in the map pack within 90 days for your agreed keywords and service area.`,
    features: [
      "Custom website — designed, built, hosted and maintained",
      "Service-area and service-type landing pages",
      "Project gallery, quote forms, click-to-call throughout",
      "Google Business Profile rebuilt and managed",
      "Categories, services, service areas and Q&A optimized",
      "Local citation cleanup and directory consistency",
      "Monthly SEO content and on-page optimization",
      "Review generation after every completed job",
      "Authority link building",
      "Rank tracking and monthly reporting",
    ],
    recommended: true,
    cta: "Start ranking",
  },
];

export function PlanCard({ plan, compact }) {
  const dark = !!plan.recommended;
  const baseShadow = dark ? "var(--shadow-float)" : "var(--shadow-card)";
  return (
    <div
      style={{
        position: "relative",
        background: dark ? "hsl(var(--foreground))" : "hsl(var(--card))",
        color: dark ? "hsl(var(--background))" : "hsl(var(--foreground))",
        border: dark ? "1px solid hsl(var(--foreground))" : "1px solid hsl(var(--border))",
        borderRadius: 24,
        padding: compact ? 30 : 36,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        boxShadow: baseShadow,
        transition: "all 0.2s var(--ease-default)",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-lift)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = baseShadow; }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 0% 0%, hsl(var(--accent) / 0.16) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative" }}>
        {/* Sits in flow rather than absolutely positioned — at phone widths the
            plan name wraps and an absolute badge lands on top of it. */}
        {plan.recommended && (
          <div style={{
            display: "inline-block",
            marginBottom: 14,
            padding: "5px 10px",
            background: "hsl(var(--accent))",
            color: "hsl(30 10% 8%)",
            borderRadius: 999,
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}>
            Most contractors
          </div>
        )}
        <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{plan.name}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
          <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            ${plan.price.toLocaleString()}
          </span>
          <span style={{ fontSize: 15, opacity: 0.6, fontWeight: 500 }}>{plan.unit}</span>
          {plan.addendum && (
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "3px 8px", borderRadius: 999,
              background: "hsla(0,0%,50%,0.16)",
              opacity: 0.8,
            }}>{plan.addendum}</span>
          )}
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.72, marginTop: 14, marginBottom: 0 }}>
          {plan.blurb}
        </p>
      </div>

      {/* the guarantee, front and centre */}
      <div style={{
        position: "relative",
        display: "flex", gap: 12, alignItems: "flex-start",
        padding: "14px 16px",
        borderRadius: 14,
        background: "hsl(var(--accent) / 0.12)",
        border: "1px solid hsl(var(--accent) / 0.4)",
      }}>
        <span style={{ color: "hsl(var(--accent))", flexShrink: 0, marginTop: 1 }}>
          <Icon.badge size={17} stroke={2} />
        </span>
        <span style={{ fontSize: 13.5, lineHeight: 1.5, fontWeight: 550 }}>{plan.guarantee}</span>
      </div>

      <a
        href="/book-a-call"
        className="cc-btn cc-btn--lg"
        style={{
          background: "hsl(var(--accent))",
          color: "hsl(30 10% 8%)",
          borderColor: "hsl(var(--accent))",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          fontWeight: 600,
        }}
      >
        {plan.cta} <Icon.arrowUpRight size={14} />
      </a>

      <ul style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "flex", flexDirection: "column", gap: 10,
        position: "relative", zIndex: 1,
      }}>
        {plan.features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.5 }}>
            <span style={{
              width: 18, height: 18, borderRadius: "50%",
              background: "hsl(var(--accent) / 0.16)",
              color: "hsl(var(--accent))",
              display: "grid", placeItems: "center",
              flexShrink: 0, marginTop: 2,
            }}>
              <Icon.check size={10} stroke={2.8} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <p style={{
        position: "relative", zIndex: 1,
        margin: "auto 0 0", paddingTop: 8,
        fontSize: 12.5, lineHeight: 1.55, opacity: 0.6,
      }}>
        {plan.spendNote}
      </p>
    </div>
  );
}

export function PlanGrid({ compact }) {
  const oneCol = useViewportWidth() < 860;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: oneCol ? "1fr" : "1fr 1fr",
      gap: 20,
      alignItems: "stretch",
      maxWidth: 980,
      margin: "0 auto",
    }}>
      {PLANS.map((p) => <PlanCard key={p.id} plan={p} compact={compact} />)}
    </div>
  );
}
