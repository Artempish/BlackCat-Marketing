"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Mock } from "@/components/mocks";
import { Layout, PageHero, CTABlock } from "@/components/shared";

function ServiceRow({ id, idx, eyebrow, title, body, bullets, mock, reverse }) {
  const rightOnLeft = reverse;
  return (
    <section id={id} className="cc-section cc-section--card" style={{ scrollMarginTop: 80 }}>
      <div className="cc-container">
        <div style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1fr",
          gap: 56,
          alignItems: "center",
          direction: rightOnLeft && window.innerWidth >= 900 ? "rtl" : "ltr",
        }}>
          <div style={{ direction: "ltr" }} className="cc-stack-md">
            <div className="cc-eyebrow">
              <span style={{ fontFamily: "var(--font-mono)", marginRight: 8 }}>0{idx}</span>
              {eyebrow}
            </div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}>{title}</h2>
            <p className="cc-lede">{body}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55 }}>
                  <span style={{ flexShrink: 0, marginTop: 4, color: "hsl(var(--accent))" }}><Icon.check size={14} stroke={2.4} /></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 8 }}>
              <a href="/book-a-call" className="cc-btn cc-btn--ghost">Talk through your setup <Icon.arrowRight size={14} /></a>
            </div>
          </div>
          <div style={{ direction: "ltr" }}>
            <div style={{
              position: "relative",
              height: 380,
              background: "hsl(var(--page))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 20,
              overflow: "hidden",
              transition: "all 0.2s var(--ease-default)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}>
              {mock}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const services = [
    {
      id: "missed-call",
      eyebrow: "MISSED CALL TEXT BACK",
      title: "The voicemail kills the lead. We don't let it get there.",
      body: "The moment a call hits voicemail, CleanerClicks fires a personalized text from your business line. Most customers reply within minutes — and they reply ready to book.",
      bullets: [
        "Sub-second trigger from missed call to outbound text",
        "Personalized in your voice with your name, shop, and the city",
        "Two-way SMS inbox — pick it up from your phone any time",
        "Quiet hours so customers don't get pinged at 11pm",
      ],
      mock: <Mock.MissedCall />,
    },
    {
      id: "follow-up",
      eyebrow: "1-YEAR AUTOMATED FOLLOW-UP",
      title: "Most leads buy on touch 5–12. Most owners stop at touch 1.",
      body: "Our 52-touchpoint sequence runs across SMS, email, and ringless voicemail — for a full year. It pauses the moment a lead replies and re-engages months later, when they're finally ready.",
      bullets: [
        "Mix of SMS, email, and ringless voicemail across 12 months",
        "Auto-pauses on any reply — no spammy double-tap",
        "Seasonal triggers (AC checkups, gutter clean, winter prep)",
        "Pre-written and customizable templates per trade",
      ],
      mock: <Mock.FollowUp />,
      reverse: true,
    },
    {
      id: "website",
      eyebrow: "HIGH-CONVERTING WEBSITE",
      title: "A site engineered to book the job, not look pretty.",
      body: "Conversion-tuned design, location-specific landing pages, fast Core Web Vitals, click-to-call on every screen. Built, hosted, and updated by us — free when you run CleanerClicks.",
      bullets: [
        "5–8 page site with location & service-specific landers",
        "Sub-second load times, 95+ PageSpeed scores",
        "Lead forms that route by zip + service type to the right tech",
        "Quarterly design refresh and unlimited copy updates",
      ],
      mock: <Mock.Website />,
    },
    {
      id: "reviews",
      eyebrow: "5-STAR REVIEW ENGINE",
      title: "Reviews built into the job, not bolted on after.",
      body: "Job complete in your CRM? The customer gets a one-tap link to drop a Google review. Unhappy ones get filtered to a private form so you can fix the issue before it goes public.",
      bullets: [
        "Auto-triggered the moment a job is marked complete",
        "One-tap deep link straight to your Google review page",
        "Sentiment filter routes 1–3 star feedback to private form",
        "Reply templates and review monitoring across Google, Yelp, Facebook",
      ],
      mock: <Mock.Reviews />,
      reverse: true,
    },
    {
      id: "forms",
      eyebrow: "SMART LEAD CAPTURE",
      title: "Every lead, one inbox, full context.",
      body: "Click-to-call, multi-step forms, exit-intent capture, abandoned-form retargeting — every lead lands in one place with the full conversation trail, not scattered across five tabs.",
      bullets: [
        "Drop-in forms with conditional logic and progressive fields",
        "Click-to-call & SMS buttons that track source attribution",
        "Abandoned form recovery via email + SMS",
        "Unified inbox: calls · texts · emails · form fills in one feed",
      ],
      mock: <Mock.Form />,
    },
  ];

  return (
    <Layout active="services">
      <PageHero
        eyebrow="SERVICES"
        title={<>Five systems. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>One booked-job machine.</span></>}
        sub="CleanerClicks isn't a tool — it's the whole revenue stack. Capture, respond, nurture, convert, and ask for the review, automatically."
        cta="Book a 20-min walkthrough"
      />

      {/* Service jump-links */}
      <section style={{ borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))", background: "hsl(var(--background))" }}>
        <div className="cc-container" style={{ padding: "16px 24px", display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
          {services.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.04em",
              color: "hsl(var(--muted-foreground))",
              border: "1px solid hsl(var(--border))",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "all 0.15s",
            }} onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(var(--foreground))"; e.currentTarget.style.borderColor = "hsl(var(--border-strong))"; }}
               onMouseLeave={(e) => { e.currentTarget.style.color = "hsl(var(--muted-foreground))"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}>
              0{i + 1} · {s.eyebrow}
            </a>
          ))}
        </div>
      </section>

      {services.map((s, i) => (
        <React.Fragment key={s.id}>
          <ServiceRow {...s} idx={i + 1} />
          {i < services.length - 1 && (
            <div className="cc-container"><hr className="cc-divider" /></div>
          )}
        </React.Fragment>
      ))}

      <CTABlock title="Want this whole stack live in 14 days?" sub="We handle setup, integrations, copy, design, and training. You give us 90 minutes total." />
    </Layout>
  );
}

export default ServicesPage;
