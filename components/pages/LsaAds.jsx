"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock } from "@/components/shared";
import { Sections3 } from "@/components/sections3";

// The search results page, stacked. LSA sits above everything else.
function SerpStack() {
  const layers = [
    { label: "Local Services Ads", sub: "Google Guaranteed · pay per lead", you: true },
    { label: "Google Ads", sub: "Paid search · pay per click" },
    { label: "Map pack", sub: "The top 3 local results" },
    { label: "Organic results", sub: "Everything below the fold" },
  ];
  return (
    <div style={{
      background: "hsl(var(--page))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 20,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 10.5,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))",
        display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
      }}>
        <Icon.search size={12} /> One search result page, top to bottom
      </div>
      {layers.map((l, i) => (
        <div
          key={l.label}
          style={{
            display: "flex", alignItems: "center", gap: 14,
            padding: "16px 18px",
            borderRadius: 14,
            background: l.you ? "hsl(var(--accent) / 0.12)" : "hsl(var(--card))",
            border: `1px solid ${l.you ? "hsl(var(--accent) / 0.5)" : "hsl(var(--border))"}`,
            boxShadow: l.you ? "0 0 0 4px hsl(var(--accent) / 0.08)" : "none",
            opacity: l.you ? 1 : 0.72 - i * 0.08,
          }}
        >
          <span style={{
            width: 26, height: 26, borderRadius: 8,
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
            background: l.you ? "hsl(var(--accent))" : "hsl(var(--muted))",
            color: l.you ? "hsl(30 10% 8%)" : "hsl(var(--muted-foreground))",
            flexShrink: 0,
          }}>{i + 1}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: l.you ? 700 : 500, fontSize: 14.5, letterSpacing: "-0.01em" }}>{l.label}</div>
            <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2 }}>{l.sub}</div>
          </div>
          {l.you && (
            <span style={{ marginLeft: "auto", flexShrink: 0 }} className="cc-hivis">
              <Icon.check size={12} stroke={2.6} /> You
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function CompareTable() {
  const narrow = window.innerWidth < 700;
  const rows = [
    ["You pay for", "A lead — a call or message", "A click, whether or not it's a lead"],
    ["Position on the page", "Above everything, including ads", "Below Local Services Ads"],
    ["Trust signal", "Google Guaranteed badge on your name", "A small \"Sponsored\" label"],
    ["Bad leads", "Disputable — Google credits them back", "You pay for the click regardless"],
    ["What Google checks", "License, insurance, background check", "Your billing details"],
    ["Setup time", "1–3 weeks for verification", "Same day"],
  ];
  return (
    <div style={{
      background: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 20,
      overflow: "hidden",
      maxWidth: 940,
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1.2fr 1.2fr",
        padding: "16px 22px",
        borderBottom: "1px solid hsl(var(--border))",
        background: "hsl(var(--page))",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))",
        gap: 12,
      }}>
        {!narrow && <div />}
        <div style={{ color: "hsl(var(--accent))" }}>Local Services Ads</div>
        <div>Regular Google Ads</div>
      </div>
      {rows.map(([label, lsa, ads], i) => (
        <div key={label} style={{
          display: "grid",
          gridTemplateColumns: narrow ? "1fr 1fr" : "1fr 1.2fr 1.2fr",
          padding: "16px 22px",
          borderTop: i === 0 ? "none" : "1px solid hsl(var(--border))",
          gap: 12,
          fontSize: 14,
          alignItems: "start",
        }}>
          {narrow ? (
            <div style={{ gridColumn: "1 / -1", fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "hsl(var(--muted-foreground))", marginBottom: 2 }}>
              {label}
            </div>
          ) : (
            <div style={{ color: "hsl(var(--muted-foreground))" }}>{label}</div>
          )}
          <div style={{ fontWeight: 550, display: "flex", gap: 8 }}>
            <span style={{ color: "hsl(var(--accent))", flexShrink: 0, marginTop: 3 }}><Icon.check size={13} stroke={2.6} /></span>
            <span>{lsa}</span>
          </div>
          <div style={{ color: "hsl(var(--muted-foreground))" }}>{ads}</div>
        </div>
      ))}
    </div>
  );
}

function LsaAdsPage() {
  const narrow = window.innerWidth < 900;

  const workflow = [
    { icon: "badge", t: "Verification, handled", b: "License, general liability insurance, and the background checks Google requires on the business and its owner. This is where most contractors stall out for months — we run it to approval." },
    { icon: "target", t: "Campaign built around your jobs", b: "Job types selected so you get the work you want, not every handyman request in the county. Service areas drawn to the zips you'll actually drive to." },
    { icon: "dollar", t: "Budget paced daily", b: "We run to your daily ceiling and adjust weekly based on which job types and areas are converting into booked estimates." },
    { icon: "filter", t: "Junk leads disputed weekly", b: "Wrong service, wrong area, spam, duplicates. Every one gets a dispute filed, and the credits come back to your account instead of quietly staying on your bill." },
    { icon: "star", t: "Reviews fed back in", b: "LSA ranking leans on your Google review count and rating. Our review process feeds it, which lowers your cost per lead over time." },
    { icon: "chart", t: "Reported in booked estimates", b: "Every lead is tracked through to whether it turned into an on-site estimate — so you know your real cost per job, not your cost per phone call." },
  ];

  return (
    <Layout active="services">
      <PageHero
        eyebrow="GOOGLE LSA ADS"
        title={<>The first thing a homeowner sees, <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>with Google vouching for you.</span></>}
        sub="Local Services Ads sit above the paid ads and above the map pack, with the Google Guaranteed badge next to your name. You pay per lead, not per click. $500/month to manage, plus your ad spend."
        cta="Book a 20-min call"
      />

      {/* Where LSA sits */}
      <section className="cc-section cc-section--card" id="where">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: narrow ? 32 : 56, alignItems: "center" }}>
            <div className="cc-stack-md">
              <div className="cc-eyebrow">POSITION ZERO</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}>
                There is nothing above it.
              </h2>
              <p className="cc-lede">
                When a homeowner searches "general contractor near me," Local Services Ads render
                first — above the sponsored results, above the map pack, above everything. On a phone,
                that's the entire first screen.
              </p>
              <p className="cc-lede">
                Your name carries the Google Guaranteed badge, which is the closest thing to Google
                telling a stranger you're safe to let into their house. Most homeowners never scroll
                past it.
              </p>
              <div style={{ marginTop: 8 }}>
                <a href="#demo" className="cc-btn cc-btn--ghost">Watch it happen <Icon.arrowRight size={14} /></a>
              </div>
            </div>
            <SerpStack />
          </div>
        </div>
      </section>

      {/* Live demo */}
      <div id="demo" style={{ scrollMarginTop: 80 }}>
        <Sections3.LiveDemo />
      </div>

      {/* Pay per lead */}
      <section className="cc-section cc-section--dark" id="pricing-model">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>HOW YOU'RE CHARGED</div>
            <h2 className="cc-h2">You pay for leads. Not for clicks, not for impressions.</h2>
            <p className="cc-lede" style={{ margin: "16px auto 0" }}>
              The single biggest difference between LSA and every other ad you've been sold.
            </p>
          </div>
          <CompareTable />
          <div style={{
            maxWidth: 940, margin: "24px auto 0",
            display: "grid",
            gridTemplateColumns: window.innerWidth < 760 ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
          }}>
            {[
              { n: "$500", l: "our management fee, per month" },
              { n: "$50/day", l: "standard ad spend ceiling" },
              { n: "$0", l: "setup fee" },
            ].map((s) => (
              <div key={s.l} style={{
                padding: 24, textAlign: "center",
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 16,
              }}>
                <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", marginTop: 8, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "hsl(var(--muted-foreground))", maxWidth: 620, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Ad spend is billed by Google straight to your card — we never mark it up. $50/day is the
            ceiling we run to by default; raise it any time you want more volume and the management
            fee stays at $500.{" "}
            <a href="/pricing#ad-spend" className="cc-link" style={{ display: "inline-flex" }}>See the spend table <Icon.arrowRight size={13} /></a>
          </p>
        </div>
      </section>

      {/* The guarantee */}
      <section className="cc-section cc-section--card" id="guarantee">
        <div className="cc-container">
          <div style={{
            padding: narrow ? 32 : 56,
            borderRadius: 24,
            background: "hsl(var(--accent) / 0.10)",
            border: "1px solid hsl(var(--accent) / 0.42)",
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "1fr 1fr",
            gap: narrow ? 28 : 56,
            alignItems: "center",
          }}>
            <div>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "hsl(var(--accent))", color: "hsl(30 10% 8%)",
                display: "grid", placeItems: "center", marginBottom: 20,
              }}>
                <Icon.badge size={24} stroke={2} />
              </div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", marginBottom: 16 }}>
                5 leads in your first 30 days.
              </h2>
              <p className="cc-lede" style={{ marginBottom: 20 }}>
                If your first 30 days of live campaigns don't produce 5 leads, we cover your LSA ad
                spend until you get there. You keep every lead that comes in along the way.
              </p>
              <a href="/guarantee#five-leads" className="cc-btn">
                Read the conditions <Icon.arrowUpRight size={14} />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "The 30 days start when the campaign goes live, not when you sign",
                "Budget stays at the agreed daily level for the full period",
                "You answer the calls during your campaign hours",
                "Leads counted as Google counts them, net of disputed credits",
              ].map((c) => (
                <div key={c} style={{
                  display: "flex", gap: 12,
                  padding: "14px 18px",
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                  fontSize: 14, lineHeight: 1.5,
                }}>
                  <span style={{ color: "hsl(var(--accent))", flexShrink: 0, marginTop: 2 }}><Icon.check size={14} stroke={2.4} /></span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section className="cc-section cc-section--card" id="management">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 48, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHAT THE $500 BUYS</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 42px)" }}>
              Six jobs, every month, so you don't have to do any of them.
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 700 ? "1fr" : window.innerWidth < 1000 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 16,
          }}>
            {workflow.map((w) => {
              const Ic = Icon[w.icon] || Icon.check;
              return (
                <div key={w.t} style={{
                  padding: 28,
                  background: "hsl(var(--page))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 16,
                  transition: "all 0.2s var(--ease-default)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.transform = "none"; }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 11,
                    background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))",
                    display: "grid", placeItems: "center", marginBottom: 18,
                  }}>
                    <Ic size={19} />
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 16.5, letterSpacing: "-0.01em", marginBottom: 8 }}>{w.t}</div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}>{w.b}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honest expectations */}
      <section className="cc-section cc-section--gradient">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.9fr 1.1fr", gap: narrow ? 28 : 64, alignItems: "start" }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>BEFORE YOU START</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>Three things LSA won't do.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { t: "It won't start tomorrow", b: "Google's verification — license, insurance, background checks — usually takes one to three weeks. We push it as fast as it can be pushed, but Google sets the pace." },
                { t: "It won't close the job for you", b: "LSA delivers a homeowner on the phone. Whether that becomes a signed contract is down to how fast you answer and how you run the estimate." },
                { t: "It won't fix a bad reputation", b: "LSA ranking leans heavily on your Google reviews. If you're sitting at 3.4 stars, we fix that first — otherwise you'd be paying for leads that go to the competitor above you." },
              ].map((x) => (
                <div key={x.t} style={{ display: "flex", gap: 16 }}>
                  <span style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0, marginTop: 3 }}>
                    <Icon.alert size={18} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 650, fontSize: 16.5, marginBottom: 5 }}>{x.t}</div>
                    <div style={{ fontSize: 14.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>{x.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Want LSA running in your city?"
        sub="20-minute call. We'll check whether LSA is live for your trade and service area, and what the leads are going for right now."
        cta="Book a 20-min call"
      />
    </Layout>
  );
}

export default LsaAdsPage;
