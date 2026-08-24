"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Sections2 } from "@/components/sections2";
import { Layout, PageHero, CTABlock, useViewportWidth } from "@/components/shared";

const PHASES = [
  {
    window: "DAYS 1–14",
    name: "Foundation",
    body: "Nothing ranks until the groundwork is right. This fortnight is audit, access and verification.",
    items: [
      "Kickoff call — your job types, your margins, the work you want more of",
      "Competitor teardown: the three companies currently holding your top-3 spots",
      "Keyword set built from your real job list, agreed with you in writing",
      "Google Business Profile claimed, audited and rebuilt — categories, services, service areas",
      "Google Guaranteed application submitted: license, insurance, background checks",
      "Site architecture mapped: service pages, service-area pages, gallery structure",
    ],
  },
  {
    window: "DAYS 15–45",
    name: "Framing",
    body: "The site goes live and LSA switches on. This is where the first leads land.",
    items: [
      "Website designed, built, reviewed with you, and launched",
      "Quote forms, click-to-call and call tracking wired to your phone",
      "LSA campaign live once Google approves — job types, service areas, daily budget set",
      "Citation cleanup: name, address and phone made consistent everywhere Google looks",
      "First month of SEO content published against buyer-intent searches",
      "Review request process turned on for completed jobs",
    ],
  },
  {
    window: "DAYS 46–90",
    name: "Finish",
    body: "Content, links, reviews and profile activity compound until the map pack moves.",
    items: [
      "Ongoing on-page optimization across every service and service-area page",
      "Authority link building from sources that make sense for a construction company",
      "Google Posts and fresh job photos published on a schedule",
      "LSA bids and budget tuned weekly against which job types actually book",
      "Junk leads disputed weekly so you're not paying for the wrong calls",
      "Rank tracking reported monthly — where you were, where you are, what moved",
    ],
  },
  {
    window: "DAY 90+",
    name: "Hold the position",
    body: "Rankings decay if nobody defends them. Month four onward is about holding and compounding.",
    items: [
      "Defend the top-3 position against competitors doing the same work",
      "Expand into adjacent service areas once the core market is locked",
      "Push cost per booked estimate down as organic traffic takes load off LSA",
      "Quarterly strategy review against your capacity and the jobs you want next season",
    ],
  },
];

function PhaseCard({ p, i }) {
  const vw = useViewportWidth();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: vw < 860 ? "1fr" : "0.55fr 1fr",
      gap: vw < 860 ? 20 : 48,
      padding: vw < 860 ? "32px 0" : "44px 0",
      borderTop: i === 0 ? "none" : "1px solid hsl(var(--border))",
      alignItems: "start",
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <span style={{
            width: 34, height: 34, borderRadius: 10,
            background: "hsl(var(--accent))", color: "hsl(30 10% 8%)",
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700,
            flexShrink: 0,
          }}>{i + 1}</span>
          <div className="cc-eyebrow cc-eyebrow--muted">{p.window}</div>
        </div>
        <h3 style={{ fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 700, letterSpacing: "-0.025em", margin: "0 0 12px" }}>
          {p.name}
        </h3>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}>{p.body}</p>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {p.items.map((it) => (
          <li key={it} style={{
            display: "flex", gap: 14,
            padding: "14px 18px",
            background: "hsl(var(--page))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 12,
            fontSize: 14.5, lineHeight: 1.55,
          }}>
            <span style={{ color: "hsl(var(--accent))", flexShrink: 0, marginTop: 2 }}><Icon.check size={14} stroke={2.4} /></span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HowItWorksPage() {
  const vw = useViewportWidth();
  const narrow = vw < 900;
  return (
    <Layout active="how-it-works">
      <PageHero
        eyebrow="HOW IT WORKS"
        title={<>Foundation. Framing. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>Finish.</span></>}
        sub="We build a marketing system the same way you build a house — in the right order, with the parts that carry weight going in first. Here's exactly what happens across your first 90 days."
        cta="Book a 20-min call"
      />

      {/* Interactive phase switcher */}
      <Sections2.HowItWorks />

      {/* Full phase breakdown */}
      <section className="cc-section cc-section--card" id="roadmap" style={{ scrollMarginTop: 80 }}>
        <div className="cc-container">
          <div style={{ marginBottom: 8, maxWidth: 680 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>THE FULL ROADMAP</div>
            <h2 className="cc-h2" style={{ marginBottom: 16 }}>Every task, in the order we do it.</h2>
            <p className="cc-lede" style={{ margin: 0 }}>
              No black box. This is the actual work list — the same one we run against internally.
            </p>
          </div>
          {PHASES.map((p, i) => <PhaseCard key={p.name} p={p} i={i} />)}
        </div>
      </section>

      {/* What we need from you */}
      <section className="cc-section cc-section--dark" id="onboarding" style={{ scrollMarginTop: 80 }}>
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: narrow ? 32 : 64, alignItems: "start" }}>
            <div className="cc-stack-md">
              <div className="cc-eyebrow">YOUR PART</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                About two hours, total.
              </h2>
              <p className="cc-lede">
                You're running crews. We're not going to ask you for weekly strategy meetings.
                Here's the entire list of what we need from you — most of it in the first week.
              </p>
              <div style={{ marginTop: 8 }}>
                <a href="/book-a-call" className="cc-btn">Start onboarding <Icon.arrowUpRight size={14} /></a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { t: "60-minute kickoff call", b: "Your jobs, your margins, your service area, your target keywords. This is the only long meeting." },
                { t: "License & insurance documents", b: "Required for Google Guaranteed. Usually a five-minute email." },
                { t: "Admin access", b: "Google Business Profile, domain, and hosting if you already have a site." },
                { t: "Job photos", b: "Whatever you've got on your phone. Real work beats stock photography every time — and Google can tell the difference." },
                { t: "One round of approvals", b: "Site copy, design, and the LSA campaign settings. About 30 minutes, once." },
                { t: "Answer the phone", b: "The one non-negotiable. LSA throttles delivery to advertisers who let calls go to voicemail." },
              ].map((x, i) => (
                <div key={x.t} style={{
                  display: "flex", gap: 16,
                  padding: 20,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 14,
                }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: "50%",
                    border: "1px solid hsl(var(--border-strong))",
                    display: "grid", placeItems: "center",
                    fontFamily: "var(--font-mono)", fontSize: 11.5,
                    color: "hsl(var(--muted-foreground))",
                    flexShrink: 0,
                  }}>{i + 1}</span>
                  <div>
                    <div style={{ fontWeight: 650, fontSize: 15.5, marginBottom: 4 }}>{x.t}</div>
                    <div style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>{x.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="cc-section cc-section--card" id="reporting" style={{ scrollMarginTop: 80 }}>
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>REPORTING</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
              Four numbers. Every month. In plain English.
            </h2>
            <p className="cc-lede" style={{ margin: "16px auto 0" }}>
              You won't get a 40-page PDF full of impressions. You'll get the numbers you'd use to
              decide whether to keep paying us.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: vw < 700 ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: 16,
          }}>
            {[
              { icon: "mapPin", t: "Where you rank", b: "Map pack position for every target keyword, tracked from inside your service area." },
              { icon: "phone", t: "Leads", b: "How many came in, from which channel, and what job type each one was." },
              { icon: "calendar", t: "Booked estimates", b: "How many of those leads turned into an actual appointment on your calendar." },
              { icon: "dollar", t: "Cost per booked job", b: "Total spend divided by jobs won. The number that tells you if this is working." },
            ].map((m) => {
              const Ic = Icon[m.icon] || Icon.chart;
              return (
                <div key={m.t} style={{
                  padding: 26,
                  background: "hsl(var(--page))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 16,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))",
                    display: "grid", placeItems: "center", marginBottom: 16,
                  }}>
                    <Ic size={18} />
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 16, marginBottom: 6, letterSpacing: "-0.01em" }}>{m.t}</div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "hsl(var(--muted-foreground))" }}>{m.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Sections2.WhyConstructionSection />

      <CTABlock
        title="Want your 90 days to start this month?"
        sub="20-minute call. We'll map your keywords and service area on the call, and tell you what week one would look like."
      />
    </Layout>
  );
}

export default HowItWorksPage;
