"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Mock } from "@/components/mocks";
import { Layout, PageHero, CTABlock } from "@/components/shared";

function ServiceRow({ id, idx, eyebrow, title, body, bullets, mock, reverse, plan, planHref }) {
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
            {plan && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                alignSelf: "flex-start",
                marginTop: 8, padding: "10px 16px",
                borderRadius: 999,
                background: "hsl(var(--muted))",
                border: "1px solid hsl(var(--border))",
                fontSize: 13.5,
              }}>
                <Icon.dollar size={14} style={{ color: "hsl(var(--accent))", flexShrink: 0 }} />
                <span>{plan}</span>
              </div>
            )}
            <div style={{ marginTop: 8, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/book-a-call" className="cc-btn cc-btn--ghost">Talk through your setup <Icon.arrowRight size={14} /></a>
              {planHref && <a href={planHref} className="cc-btn cc-btn--ghost">See the details <Icon.arrowRight size={14} /></a>}
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
      id: "lsa",
      eyebrow: "GOOGLE LSA ADS",
      title: "Sit above the map pack, and pay per lead.",
      body: "Local Services Ads are the very first thing a homeowner sees — above the paid ads, above the map. Your name carries the Google Guaranteed badge, and you're charged per lead instead of per click.",
      bullets: [
        "We run the Google Guaranteed application end to end — license, insurance, background checks",
        "Campaign built around the job types you actually want: additions, remodels, roofs, foundations",
        "Service areas and daily budget paced so you're live during the hours homeowners call",
        "Junk and out-of-area leads disputed for you every week, so you're not paying for noise",
        "Every lead recorded, scored, and tied back to whether it turned into a booked estimate",
      ],
      mock: <Mock.LsaLead />,
      plan: "$500/month management + ad spend ($50/day ceiling)",
      planHref: "/lsa-ads",
    },
    {
      id: "website",
      eyebrow: "WEBSITE",
      title: "A site built to book estimates, not win design awards.",
      body: "Homeowners decide in about eight seconds. Your site has to load fast, prove you're real, show the work, and make booking an estimate the easiest thing on the page.",
      bullets: [
        "Custom design — no template that four other contractors in your city are also using",
        "Project galleries with real before-and-after work, organized by job type",
        "Service-area pages so you show up for the suburbs you actually drive to",
        "Quote forms and click-to-call that reach your phone before they close the tab",
        "Licensing, insurance and review proof placed where homeowners look for it",
        "Fast Core Web Vitals, mobile-first, hosted and maintained by us",
      ],
      mock: <Mock.Website />,
      reverse: true,
      plan: "Included in the $5,000/month program",
      planHref: "/pricing",
    },
    {
      id: "seo",
      eyebrow: "LOCAL SEO",
      title: "Rank for the searches that end in a signed contract.",
      body: "There's a difference between traffic and buyers. We target the terms a homeowner types when they've already decided to spend money — and we build the content, citations and links that make Google believe you're the right answer.",
      bullets: [
        "Keyword research built from your real job list and your actual margins",
        "Competitor teardown — the three companies currently sitting where you want to be",
        "On-page optimization across every service and service-area page",
        "Monthly content written for buyer-intent searches, not blog filler",
        "Citation cleanup so your name, address and phone match everywhere Google looks",
        "Authority link building from sources that make sense for a construction company",
        "Rank tracking you can actually read, reported monthly",
      ],
      mock: <Mock.Rank />,
      plan: "Included in the $5,000/month program",
      planHref: "/pricing",
    },
    {
      id: "gmb",
      eyebrow: "GOOGLE BUSINESS PROFILE",
      title: "The profile is the storefront. Most contractors leave it half-built.",
      body: "Your Google Business Profile decides whether you show up in the map pack at all — and it's the first thing a homeowner reads about you. We rebuild it properly and then keep working it every month.",
      bullets: [
        "Primary and secondary categories chosen against what's actually ranking in your city",
        "Every service listed, described, and mapped to the pages on your site",
        "Service areas set correctly — the single most common reason contractors don't rank",
        "Real job photos uploaded on a schedule, geo-tagged and captioned",
        "Questions seeded and answered, so homeowners get your answer instead of a stranger's",
        "Review requests sent after every completed job, and every review responded to",
        "Google Posts published monthly to keep the profile active",
      ],
      mock: <Mock.Gmb />,
      reverse: true,
      plan: "Included in the $5,000/month program",
      planHref: "/pricing",
    },
  ];

  return (
    <Layout active="services">
      <PageHero
        eyebrow="SERVICES"
        title={<>Everything that puts you <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>first on Google.</span></>}
        sub="LSA ads, a website that converts, local SEO, and a Google Business Profile built to rank — all of it for construction companies, and only for construction companies."
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

      {/* Who this is for */}
      <section className="cc-section cc-section--gradient" id="trades">
        <div className="cc-container">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHO WE WORK WITH</div>
            <h2 className="cc-h2" style={{ marginBottom: 16 }}>
              Construction. All of it. Nothing else.
            </h2>
            <p className="cc-lede" style={{ margin: 0 }}>
              The playbook barely changes between trades — rank in the map pack, sit at the top of
              LSA, and make booking an estimate frictionless. What changes is the keyword list, the
              seasonality, and what a good lead looks like. Here's how that plays out.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 700 ? "1fr" : window.innerWidth < 1000 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: 16,
          }}>
            {[
              { icon: "hardHat", t: "General contractors", d: "Broad service lists and long buying cycles. We rank you for the high-ticket searches and keep you in front of homeowners still deciding." },
              { icon: "shield", t: "Roofing", d: "Storm-driven demand spikes fast. LSA plus a top-3 map pack position means you're the first call when a whole neighborhood needs a roof." },
              { icon: "layers", t: "Concrete & foundations", d: "Driveways, patios, slabs and foundation repair each search differently. We build a page and a keyword set for each one." },
              { icon: "ruler", t: "Remodeling", d: "Kitchens and baths are the most competitive local searches there are. Galleries, reviews and buyer-intent content are what move them." },
              { icon: "building", t: "Additions & framing", d: "Bigger tickets, fewer searches. Worth ranking for precisely — we target the exact terms, not the broad ones." },
              { icon: "blueprint", t: "Decks, fencing & outdoor", d: "Highly seasonal. We build the pipeline before the season starts instead of chasing it once it's already busy." },
              { icon: "star", t: "Custom home builders", d: "A long sales cycle where reputation carries everything. Profile, reviews and portfolio do most of the selling here." },
              { icon: "gauge", t: "Excavation & sitework", d: "Half your leads are other contractors. We split the campaign so residential and commercial each get the right message." },
              { icon: "target", t: "Specialty trades", d: "Windows, siding, stucco, masonry, waterproofing. If you build or repair structures, the playbook applies." },
            ].map((it) => {
              const Ic = Icon[it.icon] || Icon.arrowRight;
              return (
                <div
                  key={it.t}
                  style={{
                    position: "relative", display: "flex", flexDirection: "column", padding: 26,
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 16,
                    transition: "all 0.2s var(--ease-default)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))", display: "grid", placeItems: "center", marginBottom: 18 }}>
                    <Ic size={18} />
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 17, letterSpacing: "-0.01em", marginBottom: 8 }}>{it.t}</div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "hsl(var(--muted-foreground))", flex: 1 }}>{it.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock
        title="Want to see where you rank right now?"
        sub="20-minute call. We'll pull up your Google Business Profile and your three closest competitors, live, and show you the gap."
      />
    </Layout>
  );
}

export default ServicesPage;
