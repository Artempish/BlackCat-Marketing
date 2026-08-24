"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock, useViewportWidth } from "@/components/shared";
import { PLANS, PlanGrid } from "@/components/plans";

// What a month of LSA actually costs, at a few different daily budgets.
// $50/day is our standard ceiling; contractors who want more volume can raise it.
const SPEND_ROWS = [
  { daily: 25, note: "Light — smaller service area" },
  { daily: 50, note: "Our standard ceiling", standard: true },
  { daily: 100, note: "Aggressive — multi-city" },
  { daily: 150, note: "Maximum volume" },
];

function SpendTable() {
  const vw = useViewportWidth();
  const narrow = vw < 760;
  const cols = "1.1fr 1fr 1fr 1.4fr";
  return (
    <div style={{
      background: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 20,
      overflow: "hidden",
      maxWidth: 900,
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: narrow ? "1fr 1fr 1fr" : cols,
        padding: "16px 22px",
        borderBottom: "1px solid hsl(var(--border))",
        background: "hsl(var(--page))",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))",
        gap: 8,
      }}>
        <div>Daily budget</div>
        <div style={{ textAlign: "right" }}>Ad spend / mo</div>
        <div style={{ textAlign: "right" }}>Total / mo</div>
        {!narrow && <div style={{ paddingLeft: 20 }}>Who it's for</div>}
      </div>
      {SPEND_ROWS.map((r) => {
        const monthly = r.daily * 30;
        return (
          <div key={r.daily} style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr 1fr 1fr" : cols,
            padding: "15px 22px",
            borderTop: "1px solid hsl(var(--border))",
            alignItems: "center",
            fontSize: 14.5,
            gap: 8,
            background: r.standard ? "hsl(var(--accent) / 0.07)" : "transparent",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: r.standard ? 650 : 500 }}>
              ${r.daily}/day
              {r.standard && (
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  padding: "2px 6px", borderRadius: 999,
                  background: "hsl(var(--accent))", color: "hsl(30 10% 8%)",
                  fontWeight: 700,
                }}>Std</span>
              )}
            </div>
            <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13.5 }}>
              ${monthly.toLocaleString()}
            </div>
            <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13.5, fontWeight: 650 }}>
              ${(monthly + 500).toLocaleString()}
            </div>
            {!narrow && (
              <div style={{ paddingLeft: 20, fontSize: 13.5, color: "hsl(var(--muted-foreground))" }}>{r.note}</div>
            )}
          </div>
        );
      })}
      <div style={{
        padding: "16px 22px",
        borderTop: "1px solid hsl(var(--border))",
        background: "hsl(var(--page))",
        fontSize: 13,
        color: "hsl(var(--muted-foreground))",
        lineHeight: 1.6,
      }}>
        Ad spend is billed by Google directly to your card — we never mark it up. "Total" is the
        management fee plus the maximum you could spend at that daily budget over 30 days. Google
        only charges you for leads, so most months land under the ceiling.
      </div>
    </div>
  );
}

function PricingPage() {
  const vw = useViewportWidth();
  const narrow = vw < 900;
  const lsa = PLANS.find((p) => p.id === "lsa");
  const growth = PLANS.find((p) => p.id === "growth");

  return (
    <Layout active="pricing">
      <PageHero
        eyebrow="PRICING"
        title={<>Two plans. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>Both come with a guarantee.</span></>}
        sub="Run LSA to get leads on the phone this month, run the website and SEO program to own the map pack long-term, or run both. No setup fees, no build fees, month to month."
      />

      {/* The two plans */}
      <section className="cc-section cc-section--card">
        <div className="cc-container" style={{ maxWidth: 1240 }}>
          <PlanGrid />
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

      {/* Run both */}
      <section className="cc-section cc-section--dark" style={{ padding: "64px 0" }}>
        <div className="cc-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "1.3fr 1fr",
            gap: narrow ? 32 : 56,
            alignItems: "center",
          }}>
            <div className="cc-stack-md">
              <div className="cc-eyebrow">RUN BOTH</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                LSA fills the calendar now. SEO makes it cheaper later.
              </h2>
              <p className="cc-lede">
                LSA leads land in week two or three — but you pay for every one of them, forever.
                Map-pack rankings take 90 days to build, and then the leads are free. Contractors who
                run both use LSA to cover the gap while the organic side compounds, then dial the ad
                budget down once the rankings hold.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Leads from day one instead of day ninety",
                  "One team, one report, both channels in the same numbers",
                  "Cost per booked job drops as the organic side takes over",
                ].map((b) => (
                  <li key={b} style={{ display: "flex", gap: 12, fontSize: 15, lineHeight: 1.55 }}>
                    <span style={{ flexShrink: 0, marginTop: 4, color: "hsl(var(--accent))" }}><Icon.check size={14} stroke={2.4} /></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--accent) / 0.45)",
              borderRadius: 20,
              padding: 32,
              boxShadow: "0 0 0 4px hsl(var(--accent) / 0.08)",
            }}>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 18 }}>BOTH PLANS TOGETHER</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
                <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>$5,500</span>
                <span style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", fontWeight: 500 }}>/month</span>
              </div>
              <div style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", marginTop: 10, lineHeight: 1.6 }}>
                plus LSA ad spend, billed by Google — up to $1,500/month at our standard $50/day ceiling.
              </div>
              <hr className="cc-divider" style={{ margin: "22px 0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["LSA management", "$500/mo"],
                  ["Website, SEO & GMB", "$5,000/mo"],
                  ["Setup fees", "$0"],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 14 }}>
                    <span style={{ color: "hsl(var(--muted-foreground))" }}>{k}</span>
                    <span style={{ fontWeight: 600, fontFamily: "var(--font-mono)", fontSize: 13 }}>{v}</span>
                  </div>
                ))}
              </div>
              <a href="/book-a-call" className="cc-btn cc-btn--lg" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>
                Book a call <Icon.arrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How ad spend works */}
      <section className="cc-section cc-section--card" id="ad-spend" style={{ scrollMarginTop: 80 }}>
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 36, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 12 }}>HOW LSA AD SPEND WORKS</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)", marginBottom: 16 }}>
              $50/day is the ceiling, not the rule.
            </h2>
            <p className="cc-lede" style={{ margin: "0 auto" }}>
              The $500/month management fee is fixed. Ad spend is yours, paid straight to Google, and
              you decide the daily budget. We recommend $50/day because that's the level where the
              5-lead guarantee holds — but you can go higher any time you want more volume.
            </p>
          </div>
          <SpendTable />
        </div>
      </section>

      {/* Guarantees */}
      <section className="cc-section cc-section--dark" style={{ padding: "64px 0" }}>
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 12 }}>WHAT WE PUT IN WRITING</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>The guarantees attached to each plan.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: vw < 700 ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                i: <Icon.target size={22} />,
                t: "Top 3 in 90 days",
                b: `Attached to the $5,000/month program. If your Google Business Profile isn't in the top 3 of the map pack for the agreed keywords and service area within 90 days, we keep working it at no extra charge until it is.`,
              },
              {
                i: <Icon.phone size={22} />,
                t: "5 LSA leads in 30 days",
                b: `Attached to the $500/month LSA plan. If your first 30 days live don't produce 5 leads, we pay your LSA ad spend until you hit 5. You keep every lead.`,
              },
              {
                i: <Icon.refresh size={22} />,
                t: "Month to month",
                b: "No annual contract on either plan. The 90-day guarantee assumes you stay for the 90 days, because that's how long the work takes to compound — but you're never locked in beyond that.",
              },
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
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 8, letterSpacing: "-0.01em" }}>{g.t}</div>
                <div style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6 }}>{g.b}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, fontSize: 13.5, color: "hsl(var(--muted-foreground))" }}>
            Both guarantees carry conditions. <a href="/guarantee" className="cc-link" style={{ display: "inline-flex" }}>Read the full terms <Icon.arrowRight size={13} /></a>
          </p>
        </div>
      </section>

      {/* What's not included — honesty section */}
      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.9fr 1.1fr", gap: narrow ? 28 : 64, alignItems: "start" }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>NO SURPRISES</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>What isn't in the price.</h2>
              <p className="cc-lede" style={{ marginTop: 16 }}>
                Three things you'll pay for outside our invoice. We'd rather you know now than find
                out on the second bill.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { t: "LSA ad spend", b: "Billed by Google directly to your card. We never touch it and never mark it up. At the $50/day ceiling that's up to $1,500/month." },
                { t: "Your domain name", b: "Roughly $15/year, in your name, on your account. We'll help you register it, but we don't hold your domain hostage." },
                { t: "Anything you'd own anyway", b: "Professional photography or drone footage, if you want it. Plenty of clients use their own job-site photos instead, and those often perform better." },
              ].map((x) => (
                <div key={x.t} style={{
                  display: "flex", gap: 14,
                  padding: 20,
                  background: "hsl(var(--page))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 14,
                }}>
                  <span style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0, marginTop: 2 }}>
                    <Icon.alert size={16} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{x.t}</div>
                    <div style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>{x.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Not sure which plan fits?"
        sub="20-min call. We'll look at your market, your competitors, and your capacity — and tell you which one to start with, even if it's the cheaper one."
        cta="Book a 20-min call"
      />
    </Layout>
  );
}

export default PricingPage;
