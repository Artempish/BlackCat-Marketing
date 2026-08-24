"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock } from "@/components/shared";

// ⚠️ BEFORE LAUNCH: have these terms reviewed against the actual service
// agreement your clients sign, so the page and the contract say the same thing.
const GUARANTEES = [
  {
    id: "top-3",
    icon: "target",
    kicker: "ATTACHED TO THE $5,000/MO PROGRAM",
    headline: "Top 3 of the map pack in 90 days.",
    promise:
      "Within 90 days of your Google Business Profile going live under our management, your company ranks in the top 3 of the Google map pack for the target keywords and service area we agree on in writing at kickoff.",
    ifWeMiss:
      "We keep working the campaign at no additional charge until you get there. You stop paying the monthly fee at day 90 and we continue the SEO and GMB work for free until the ranking lands.",
    conditions: [
      "Target keywords and the primary service area are agreed in writing during onboarding, before work starts.",
      "Ranking is measured from within your primary service area, on the keywords we agreed — not on every possible search term.",
      "You give us admin access to your Google Business Profile, website and hosting for the full 90 days.",
      "The profile stays verified and in good standing — no suspensions caused by information we weren't given.",
      "You supply job photos, review requests and content approvals within the turnaround times set at kickoff.",
      "You don't make changes to the profile or site outside of our process without telling us.",
      "The engagement runs continuously for the full 90 days.",
    ],
  },
  {
    id: "five-leads",
    icon: "phone",
    kicker: "ATTACHED TO THE $500/MO LSA PLAN",
    headline: "5 LSA leads in your first 30 days.",
    promise:
      "In the first 30 days of your Local Services Ads campaign running live, you receive at least 5 leads through Google Local Services.",
    ifWeMiss:
      "We pay for your LSA ad spend until you reach 5 leads. You keep every lead that comes in during that period, and the management fee stays where it is.",
    conditions: [
      "The 30 days start the day your campaign goes live — not the day you sign, and not while Google is still verifying you.",
      "Your Google Guaranteed verification is approved and your profile stays active for the whole period.",
      "The daily budget stays at the agreed level (our standard is $50/day) for the full 30 days.",
      "Calls are answered during the business hours set in the campaign. Google throttles delivery to advertisers who don't pick up.",
      "Leads are counted as Google counts them in your Local Services account, net of any credits Google issues for disputed leads.",
      "You don't pause, restrict or edit the campaign yourself during the 30 days.",
    ],
  },
];

function GuaranteeCard({ g }) {
  const Ic = Icon[g.icon] || Icon.badge;
  const narrow = window.innerWidth < 900;
  return (
    <section id={g.id} className="cc-section cc-section--card" style={{ scrollMarginTop: 80 }}>
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1fr", gap: narrow ? 32 : 56, alignItems: "start" }}>
          <div className="cc-stack-md">
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: "hsl(var(--accent))", color: "hsl(30 10% 8%)",
              display: "grid", placeItems: "center",
            }}>
              <Ic size={24} stroke={2} />
            </div>
            <div className="cc-eyebrow cc-eyebrow--muted">{g.kicker}</div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3.4vw, 42px)" }}>{g.headline}</h2>

            <div style={{
              padding: 22,
              borderRadius: 16,
              background: "hsl(var(--accent) / 0.10)",
              border: "1px solid hsl(var(--accent) / 0.38)",
            }}>
              <div className="cc-eyebrow" style={{ marginBottom: 10 }}>THE PROMISE</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{g.promise}</p>
            </div>

            <div style={{
              padding: 22,
              borderRadius: 16,
              background: "hsl(var(--page))",
              border: "1px solid hsl(var(--border))",
            }}>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 10 }}>IF WE MISS IT</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "hsl(var(--subtle-foreground))" }}>{g.ifWeMiss}</p>
            </div>
          </div>

          <div style={{
            background: "hsl(var(--page))",
            border: "1px solid hsl(var(--border))",
            borderRadius: 20,
            padding: narrow ? 26 : 32,
          }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 18 }}>
              WHAT HAS TO BE TRUE
            </div>
            <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, margin: "0 0 20px" }}>
              A guarantee only means something if both sides know exactly what it covers. Here's
              every condition, up front, before you sign anything.
            </p>
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {g.conditions.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: 14, fontSize: 14.5, lineHeight: 1.55 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%",
                    border: "1px solid hsl(var(--border-strong))",
                    display: "grid", placeItems: "center",
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "hsl(var(--muted-foreground))",
                    flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</span>
                  <span style={{ color: "hsl(var(--subtle-foreground))" }}>{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteePage() {
  const narrow = window.innerWidth < 900;
  return (
    <Layout active="guarantee">
      <PageHero
        eyebrow="OUR GUARANTEES"
        title={<>We'll tell you what we'll hit — <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>and what happens if we don't.</span></>}
        sub="Two numbers, written into the agreement: where you rank, and how many leads you get. Every condition is on this page before you sign anything."
        cta="Book a 20-min call"
      />

      {/* Summary strip */}
      <section className="cc-section cc-section--dark" style={{ padding: "56px 0" }}>
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 760 ? "1fr" : "1fr 1fr", gap: 20 }}>
            {GUARANTEES.map((g) => {
              const Ic = Icon[g.icon] || Icon.badge;
              return (
                <a key={g.id} href={`#${g.id}`} style={{
                  display: "flex", gap: 18, alignItems: "flex-start",
                  padding: 28,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 18,
                  transition: "all 0.2s var(--ease-default)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.transform = "none"; }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))",
                    display: "grid", placeItems: "center", flexShrink: 0,
                  }}>
                    <Ic size={20} />
                  </span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 19, letterSpacing: "-0.015em", marginBottom: 6 }}>{g.headline}</div>
                    <div style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.55 }}>{g.ifWeMiss}</div>
                    <span className="cc-link" style={{ marginTop: 12 }}>Read the conditions <Icon.arrowRight size={14} /></span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {GUARANTEES.map((g) => <GuaranteeCard key={g.id} g={g} />)}

      {/* Why we can offer this */}
      <section className="cc-section cc-section--gradient">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.9fr 1.1fr", gap: narrow ? 28 : 64, alignItems: "start" }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHY WE CAN PROMISE THIS</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
                Because we only do one industry.
              </h2>
            </div>
            <div className="cc-stack-md" style={{ fontSize: 16, lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
              <p style={{ margin: 0 }}>
                An agency serving twenty industries can't guarantee anything, because every new client
                is a new experiment. We've run the same playbook — the same keyword patterns, the same
                Google Guaranteed paperwork, the same profile structure — on construction companies
                over and over.
              </p>
              <p style={{ margin: 0 }}>
                That's also why we qualify hard on the call. If your market is genuinely
                unwinnable in 90 days, or your profile has a history we can't fix, we'll tell you
                on the call rather than sign you and miss.
              </p>
              <p style={{ margin: 0, color: "hsl(var(--foreground))", fontWeight: 550 }}>
                A guarantee we'd have to weasel out of isn't worth offering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fine print */}
      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div className="cc-legal" style={{ margin: "0 auto" }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>THE FINE PRINT</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 20px" }}>
              Things worth saying plainly.
            </h2>
            <section>
              <h3>What a guarantee is and isn't</h3>
              <p>
                Both guarantees are performance commitments about our own work — continued service at
                no charge, or covered ad spend. Neither is a promise of revenue, profit, or a specific
                number of signed contracts. What a lead is worth depends on how you sell, price and
                follow up, and that part is yours.
              </p>
            </section>
            <section>
              <h3>Google owns the rankings</h3>
              <p>
                Nobody can control Google's algorithm, and any agency claiming otherwise is selling
                you something. What we guarantee is that we keep working until the result lands, at
                our expense, rather than billing you for effort and shrugging.
              </p>
            </section>
            <section>
              <h3>These terms live in your agreement</h3>
              <p>
                Everything on this page is reproduced in the service agreement you sign, with the
                specific keywords, service area and budget filled in for your company. If anything
                here and the agreement ever disagree, the signed agreement governs. Read it before
                you sign it — and ask us about anything that isn't clear.
              </p>
            </section>
            <section>
              <h3>One claim at a time</h3>
              <p>
                Each guarantee applies to the plan it's attached to. Running both plans doesn't stack
                the remedies — the top-3 guarantee covers the SEO and GMB program, the lead guarantee
                covers LSA.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CTABlock
        title="Want to know if your market qualifies?"
        sub="20-minute call. We'll look at your city, your competitors and your profile, and tell you straight whether we'd put these guarantees on it."
        cta="Book a 20-min call"
      />
    </Layout>
  );
}

export default GuaranteePage;
