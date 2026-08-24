"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Mock } from "@/components/mocks";
import { useViewportWidth } from "@/components/shared";
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

// ===== Features — the three services =====
function Features() {
  const features = [
    {
      eyebrow: "GOOGLE LSA ADS",
      title: "Above the ads. Above the map.",
      desc: "Local Services Ads sit at the very top of Google with the Google Guaranteed badge next to your name. You pay per lead, not per click — and disputed junk leads get credited back.",
      mock: <Mock.LsaLead />,
      href: "/lsa-ads",
    },
    {
      eyebrow: "SEO & GMB",
      title: "Top 3 of the map pack in 90 days.",
      desc: "Your Google Business Profile rebuilt category by category, service areas mapped, citations cleaned, and content written for the jobs you actually want to win.",
      mock: <Mock.Rank />,
      href: "/services#seo",
    },
    {
      eyebrow: "GOOGLE BUSINESS PROFILE",
      title: "The profile does the selling.",
      desc: "Photos of real jobs, every service listed, questions seeded and answered, reviews requested after every completed job — the profile homeowners actually judge you on.",
      mock: <Mock.Gmb />,
      href: "/services#gmb",
    },
    {
      eyebrow: "WEBSITE",
      title: "A site built to book estimates.",
      desc: "Fast, mobile-first, and pointed at one action: get the estimate booked. Project galleries, service-area pages, and forms that reach your phone before the homeowner closes the tab.",
      mock: <Mock.Website />,
      href: "/services#website",
    },
  ];

  return (
    <section className="cc-section cc-section--card" id="features">
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHAT WE BUILD</div>
          <h2 className="cc-h2" style={{ maxWidth: 720, margin: "0 auto" }}>
            Everything a contractor needs to get found. Nothing they don't.
          </h2>
          <p className="cc-lede" style={{ margin: "16px auto 0" }}>
            No brand videos. No vanity impressions. Leads and booked estimates.
          </p>
        </div>

        <div className="cc-stack-md">
          <div className="cc-feature-grid">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>
          <div className="cc-feature-grid cc-feature-grid--row2">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ eyebrow, title, desc, mock, href }) {
  return (
    <div className="cc-feature-card">
      <div className="cc-feature-card__visual">
        {mock}
      </div>
      <div className="cc-feature-card__body">
        <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 12, fontSize: 11 }}>{eyebrow}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={href} className="cc-link">Learn more <Icon.arrowRight size={14} /></a>
      </div>
    </div>
  );
}

// ===== Why construction-only =====
function WhyConstructionSection() {
  const vw = useViewportWidth();
  return (
    <section className="cc-section cc-section--card" id="proof">
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: vw < 900 ? "1fr" : "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div className="cc-stack-lg">
            <div className="cc-eyebrow">ONE INDUSTRY, ON PURPOSE</div>
            <h2 className="cc-h2">We don't market dentists. We market builders.</h2>
            <p className="cc-lede">
              A general agency spends your first two months learning what a change order is.
              We already know your ticket sizes, your seasons, your permit delays, and which
              search terms bring a homeowner with a budget instead of somebody pricing a fence
              they'll never build.
            </p>
            <div className="cc-stack-md" style={{ marginTop: 8 }}>
              <NumberedItem
                n="1"
                title="Keyword lists built from real jobs"
                body="We target the searches that end in a signed contract — 'kitchen remodel contractor', 'foundation repair near me', 'home addition builder' — not cheap traffic that never converts."
              />
              <NumberedItem
                n="2"
                title="We know what Google asks contractors for"
                body="License verification, insurance certificates, background checks, service-area rules. We've run the Google Guaranteed process enough times to keep it from stalling."
              />
              <NumberedItem
                n="3"
                title="Reporting in the numbers you run on"
                body="Not impressions. Leads, cost per lead, booked estimates, and cost per booked job — so you can tell whether the marketing paid for itself this month."
              />
            </div>
            <div style={{ marginTop: 8 }}>
              <a href="/how-it-works" className="cc-btn cc-btn--ghost">See the 90-day plan <Icon.arrowRight size={14} /></a>
            </div>
          </div>

          <ChannelGrid />
        </div>
      </div>
    </section>
  );
}

function NumberedItem({ n, title, body }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <span style={{
        width: 28, height: 28, borderRadius: "50%",
        border: "1px solid hsl(var(--border-strong))",
        display: "grid", placeItems: "center",
        fontFamily: "var(--font-mono)", fontSize: 12,
        color: "hsl(var(--muted-foreground))",
        flexShrink: 0,
      }}>{n}</span>
      <div>
        <div style={{ fontWeight: 600, fontSize: 16.5, letterSpacing: "-0.01em", marginBottom: 4 }}>{title}</div>
        <div style={{ color: "hsl(var(--muted-foreground))", fontSize: 14.5, lineHeight: 1.55 }}>{body}</div>
      </div>
    </div>
  );
}

function ChannelGrid() {
  const tools = [
    { label: "LSA ads", icon: <Icon.google size={20} />, active: true },
    { label: "Map pack", icon: <Icon.mapPin size={20} />, active: true },
    { label: "GMB", icon: <Icon.building size={20} />, active: true },
    { label: "Website", icon: <Icon.globe size={20} />, active: true },
    { label: "Local SEO", icon: <Icon.search size={20} />, active: true },
    { label: "Reviews", icon: <Icon.star size={20} />, active: true },
    { label: "Citations", icon: <Icon.layers size={20} />, active: true },
    { label: "Content", icon: <Icon.form size={20} />, active: true },
    { label: "Reporting", icon: <Icon.chart size={20} />, active: true },
  ];
  return (
    <div style={{
      position: "relative",
      borderRadius: 20,
      border: "1px solid hsl(var(--border))",
      background: "hsl(var(--card))",
      padding: 28,
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 30% 30%, hsl(var(--accent-soft)) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 12,
        position: "relative",
      }}>
        {tools.map((t, i) => (
          <div
            key={t.label}
            className={`cc-tool-tile${t.active ? " cc-tool-tile--active" : ""}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {t.icon}
            <span>{t.label}</span>
          </div>
        ))}
      </div>
      <div style={{
        position: "absolute", top: 16, right: 16,
        padding: "5px 10px",
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 999,
        fontFamily: "var(--font-mono)", fontSize: 10.5,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span className="cc-live-dot" /> All managed by us
      </div>
    </div>
  );
}

// ===== The 90-day plan (interactive tabs) =====
function HowItWorks() {
  const vw = useViewportWidth();
  const [active, setActive] = useState2(0);

  useEffect2(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % 4);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      num: "01",
      window: "DAYS 1–14",
      title: "Foundation",
      body: "Audit, verification, and the groundwork Google needs before anything can rank.",
      mock: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: <Icon.search size={18} />, label: "Competitor & keyword audit", val: "Your 3 closest rivals, mapped" },
            { icon: <Icon.badge size={18} />, label: "Google Guaranteed application", val: "License + insurance + background check" },
            { icon: <Icon.building size={18} />, label: "GMB claimed & rebuilt", val: "Categories, services, service areas" },
          ].map((s) => (
            <div key={s.label} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: 14, background: "hsl(var(--card))", border: "1px solid hsl(var(--border))",
              borderRadius: 12,
            }}>
              <div style={{ color: "hsl(var(--accent))", flexShrink: 0 }}>{s.icon}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>{s.val}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: "02",
      window: "DAYS 15–45",
      title: "Framing",
      body: "The site goes live, LSA turns on, and the first leads start landing.",
      mock: <Mock.LsaLead />,
      raw: true,
    },
    {
      num: "03",
      window: "DAYS 46–90",
      title: "Finish",
      body: "Content, citations, reviews and links compound until the map pack moves.",
      mock: <Mock.Rank />,
      raw: true,
    },
    {
      num: "04",
      window: "DAY 90+",
      title: "Hold the position",
      body: "Ranking is not a one-time job. We defend the spot and push cost per booked job down.",
      mock: <Mock.Report />,
      raw: true,
    },
  ];

  return (
    <section className="cc-section cc-section--card" id="how">
      <div className="cc-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>THE 90-DAY PLAN</div>
          <h2 className="cc-h2">Foundation. Framing. Finish.</h2>
          <p className="cc-lede" style={{ margin: "16px auto 0" }}>
            We build a marketing system the same way you build a house — in the right order.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: vw < 900 ? "1fr" : "1fr 1.2fr",
          gap: 48,
          alignItems: "start",
        }}>
          {/* Step list */}
          <div className="cc-stack-sm">
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                display: "flex", gap: 20, padding: 20,
                background: active === i ? "hsl(var(--card))" : "transparent",
                border: "1px solid",
                borderColor: active === i ? "hsl(var(--border))" : "transparent",
                borderRadius: 14,
                textAlign: "left",
                cursor: "pointer",
                width: "100%",
                transition: "all 0.2s var(--ease-default)",
                boxShadow: active === i ? "var(--shadow-card)" : "none",
                color: "hsl(var(--foreground))",
              }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: active === i ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                  fontWeight: 500,
                  flexShrink: 0,
                  paddingTop: 2,
                }}>{s.num}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", color: "hsl(var(--muted-foreground))", marginBottom: 5 }}>
                    {s.window}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 16.5, letterSpacing: "-0.01em", marginBottom: 4 }}>{s.title}</div>
                  <div style={{
                    fontSize: 14.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.5,
                    maxHeight: active === i ? 70 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s var(--ease-default), margin 0.3s var(--ease-default)",
                  }}>{s.body}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Step visual */}
          <div style={{
            background: "hsl(var(--page))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 20,
            padding: steps[active].raw ? 0 : 32,
            minHeight: 380,
            position: "relative",
            overflow: "hidden",
          }}>
            {!steps[active].raw && (
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 24 }}>
                {steps[active].window} · {steps[active].title.toUpperCase()}
              </div>
            )}
            <div key={active} className="cc-fade-up" style={steps[active].raw ? { position: "absolute", inset: 0 } : undefined}>
              {steps[active].mock}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Sections2 = { Features, WhyConstructionSection, HowItWorks };
