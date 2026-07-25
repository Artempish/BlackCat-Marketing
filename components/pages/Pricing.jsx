"use client";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock } from "@/components/shared";
import React from "react";
const { useState: useStateP } = React;

// Two real tiers from the rate card.
const ESSENTIALS = [
  "Custom website, 3–5 pages",
  "Logo design",
  "We respond to ALL your Google reviews — for you",
  "Automatic Google review updates",
  "Free super-fast hosting",
  "Functional quote forms",
  "Domain name",
  "Website maintenance",
  "Auto call text back",
];

const PROFESSIONAL_EXTRAS = [
  "1-year lead follow-up for return & referral customers",
  "4–5★ only Google review request link",
  "Website live chat that converts visitors into customers",
  "Text + email confirmations sent automatically",
  "Unified inbox (calls · texts · emails · forms)",
  "Full customer support access",
];

const ELITE_EXTRAS = [
  "Local SEO to outrank competitors in your service area",
  "Google Business Profile fully managed",
  "Targeted keyword strategy",
  "Monthly SEO content + on-page optimization",
  "Authority backlink campaign",
  "Monthly rank tracking & reports",
];

function PricingCard({ kind, name, price, blurb, features, dividerLabel, cta = "Start now", recommended, elite }) {
  const dark = kind === "professional";
  const baseShadow = elite
    ? "0 0 0 4px hsla(var(--accent), 0.10), var(--shadow-lift)"
    : dark
      ? "var(--shadow-float)"
      : "var(--shadow-card)";
  return (
    <div style={{
      position: "relative",
      background: dark ? "hsl(var(--foreground))" : "hsl(var(--card))",
      color: dark ? "hsl(var(--background))" : "hsl(var(--foreground))",
      border: elite
        ? "1px solid hsl(var(--accent))"
        : dark
          ? "1px solid hsl(var(--foreground))"
          : "1px solid hsl(var(--border))",
      borderRadius: 24,
      padding: 36,
      display: "flex", flexDirection: "column", gap: 22,
      boxShadow: baseShadow,
      transition: "all 0.2s var(--ease-default)",
      overflow: "hidden",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-lift)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = baseShadow; }}>
      {dark && (
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 0% 0%, hsla(var(--accent), 0.18) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />
      )}
      {elite && (
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 100% 0%, hsla(var(--accent), 0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
      )}
      {(recommended || elite) && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "5px 10px",
          background: elite ? "hsl(var(--accent))" : "hsl(var(--accent))",
          color: "white",
          borderRadius: 999,
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 500,
          zIndex: 1,
        }}>
          {elite ? "Best for growth" : "Most popular"}
        </div>
      )}

      <div style={{ position: "relative" }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11.5,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: dark ? "hsla(0,0%,100%,0.6)" : "hsl(var(--muted-foreground))",
          marginBottom: 12,
        }}>
          Cleaners · {name} System
        </div>
        <h3 style={{
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 8px",
        }}>{name}</h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: 50, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>${price}</span>
          <span style={{
            fontSize: 15,
            color: dark ? "hsla(0,0%,100%,0.55)" : "hsl(var(--muted-foreground))",
            fontWeight: 500,
          }}>/month</span>
        </div>
        <p style={{
          fontSize: 14, lineHeight: 1.55,
          color: dark ? "hsla(0,0%,100%,0.7)" : "hsl(var(--muted-foreground))",
          marginTop: 14, marginBottom: 0,
        }}>{blurb}</p>
      </div>

      <a href="/book-a-call" className="cc-btn cc-btn--lg" style={{
        background: elite
          ? "hsl(var(--accent))"
          : dark
            ? "hsl(var(--background))"
            : "hsl(var(--foreground))",
        color: elite
          ? "white"
          : dark
            ? "hsl(var(--foreground))"
            : "hsl(var(--background))",
        borderColor: elite
          ? "hsl(var(--accent))"
          : dark
            ? "hsl(var(--background))"
            : "hsl(var(--foreground))",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
      }}>{cta} <Icon.arrowUpRight size={14} /></a>

      {dividerLabel && (
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          position: "relative", zIndex: 1,
        }}>
          <hr style={{
            flex: 1,
            border: "none",
            borderTop: `1px dashed ${dark ? "hsla(0,0%,100%,0.18)" : "hsl(var(--border))"}`,
            margin: 0,
          }} />
          <span style={{
            fontSize: 11.5,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: dark ? "hsla(0,0%,100%,0.65)" : "hsl(var(--muted-foreground))",
            whiteSpace: "nowrap",
          }}>
            {dividerLabel}
          </span>
          <hr style={{
            flex: 1,
            border: "none",
            borderTop: `1px dashed ${dark ? "hsla(0,0%,100%,0.18)" : "hsl(var(--border))"}`,
            margin: 0,
          }} />
        </div>
      )}

      <ul style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "flex", flexDirection: "column", gap: 10,
        position: "relative", zIndex: 1,
      }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.5 }}>
            <span style={{
              width: 18, height: 18,
              borderRadius: "50%",
              background: dark
                ? "hsla(0,0%,100%,0.12)"
                : elite
                  ? "hsl(var(--accent))"
                  : "hsl(var(--accent-soft))",
              color: dark
                ? "white"
                : elite
                  ? "white"
                  : "hsl(var(--accent))",
              display: "grid", placeItems: "center",
              flexShrink: 0, marginTop: 2,
            }}>
              <Icon.check size={10} stroke={2.8} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingPage() {
  return (
    <Layout active="pricing">
      <PageHero
        eyebrow="PRICING"
        title={<>Three systems. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>Pick the one that fits.</span></>}
        sub="Start with Essentials to get your site, hosting, and missed-call text back in place. Upgrade to Professional for full automation, or go Elite when you want us driving traffic too."
      />

      {/* Three-tier cards */}
      <section className="cc-section cc-section--card">
        <div className="cc-container" style={{ maxWidth: 1240 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 1000 ? (window.innerWidth < 700 ? "1fr" : "1fr 1fr") : "repeat(3, 1fr)",
            gap: 20,
            alignItems: "stretch",
          }}>
            <PricingCard
              kind="essentials"
              name="Essentials"
              price={197}
              blurb="The website, the hosting, the missed-call safety net — everything you need to stop bleeding leads."
              features={ESSENTIALS}
            />
            <PricingCard
              kind="professional"
              name="Professional"
              price={297}
              blurb="Everything in Essentials, plus the automation that turns a missed call into a 5-star review six months later."
              dividerLabel="Essentials +"
              features={PROFESSIONAL_EXTRAS}
              recommended
            />
            <PricingCard
              kind="elite"
              name="Elite"
              price={497}
              blurb="Everything in Professional, plus a full SEO program so customers find you on Google before they call anyone else."
              dividerLabel="Professional + SEO"
              features={ELITE_EXTRAS}
              elite
            />
          </div>

          <p style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "hsl(var(--muted-foreground))",
          }}>
            Month-to-month · No setup fees · Cancel anytime
          </p>
        </div>
      </section>

      {/* Comparison table — what's in which tier */}
      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 12 }}>WHAT'S IN EACH</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>Side-by-side breakdown.</h2>
          </div>
          <TierComparison />
        </div>
      </section>

      {/* Guarantees */}
      <section className="cc-section cc-section--dark" style={{ padding: "64px 0" }}>
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              { i: <Icon.sparkles size={22} />, t: "Done-for-you setup", b: "We handle copy, design, integrations, and training. You give us 90 minutes total." },
              { i: <Icon.bolt size={22} />, t: "Live in 14 days", b: "Or we keep building for free until you are. We never have, but it's there." },
              { i: <Icon.refresh size={22} />, t: "Cancel any time", b: "Month to month. Take your number, your data, and your customer list with you." },
            ].map((g) => (
              <div key={g.t} style={{
                padding: 28,
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 16,
                transition: "all 0.2s var(--ease-default)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}>
                <div style={{ color: "hsl(var(--accent))", marginBottom: 14 }}>{g.i}</div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, letterSpacing: "-0.01em" }}>{g.t}</div>
                <div style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>{g.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Not sure which tier fits?" sub="20-min call. We'll look at your business and tell you which system makes sense — even if it's the cheaper one." cta="Book a 20-min call" />
    </Layout>
  );
}

// What's in each tier — Essentials items, then Pro extras, then Elite extras
function TierComparison() {
  const rows = [
    ...ESSENTIALS.map((f) => ({ feature: f, e: true, p: true, el: true })),
    ...PROFESSIONAL_EXTRAS.map((f) => ({ feature: f, e: false, p: true, el: true })),
    ...ELITE_EXTRAS.map((f) => ({ feature: f, e: false, p: false, el: true })),
  ];
  const cell = (on, accentForElite) => (
    <div style={{ textAlign: "center" }}>
      {on
        ? <Icon.check size={16} stroke={2.4} style={{ color: accentForElite ? "hsl(var(--accent))" : "hsl(var(--accent))", margin: "0 auto" }} />
        : <span style={{ opacity: 0.3 }}>—</span>}
    </div>
  );
  return (
    <div style={{
      background: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 20,
      overflow: "hidden",
      maxWidth: 1080,
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
        padding: "16px 24px",
        borderBottom: "1px solid hsl(var(--border))",
        background: "hsl(var(--page))",
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))",
      }}>
        <div>Feature</div>
        <div style={{ textAlign: "center" }}>Essentials</div>
        <div style={{ textAlign: "center" }}>Professional</div>
        <div style={{ textAlign: "center", color: "hsl(var(--accent))" }}>Elite</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          padding: "14px 24px",
          borderTop: i === 0 ? "none" : "1px solid hsl(var(--border))",
          alignItems: "center",
          fontSize: 14.5,
        }}>
          <div>{r.feature}</div>
          {cell(r.e)}
          {cell(r.p)}
          {cell(r.el, true)}
        </div>
      ))}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
        padding: "18px 24px",
        borderTop: "1px solid hsl(var(--border))",
        background: "hsl(var(--page))",
        alignItems: "center",
      }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))" }}>
          Monthly
        </div>
        <div style={{ textAlign: "center", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
          $197<span style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>/mo</span>
        </div>
        <div style={{ textAlign: "center", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>
          $297<span style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>/mo</span>
        </div>
        <div style={{ textAlign: "center", fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", color: "hsl(var(--accent))" }}>
          $497<span style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>/mo</span>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
