"use client";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock } from "@/components/shared";
import React from "react";
const { useState: useStateF } = React;

const FAQ_GROUPS = [
  {
    cat: "Start here",
    items: [
      { q: "What does CleanerClicks do?", a: "CleanerClicks builds high-converting websites and lead-capture & follow-up automation for service businesses. We design, build, and host your site, then connect it to a system that texts back every missed call in under a minute, follows up with leads for a full year, and collects 5-star Google reviews automatically — so you book more jobs without hiring a marketing team." },
      { q: "How much does a website for a cleaning business cost?", a: "With CleanerClicks the website is included in your monthly plan — there's no separate website bill. Plans start at $197/mo (Essentials) and include design, build, hosting, domain, and a logo, plus missed-call text back and automated review responses. For comparison, a standalone custom site from an agency usually runs $3,000–$10,000 up front; here it's bundled with the automation that actually books the jobs, month-to-month with no setup fee." },
      { q: "Where is CleanerClicks based, and who is it for?", a: "CleanerClicks is based in Fargo, North Dakota, and serves local service businesses across the U.S. It's built for trades like cleaning, pressure washing, landscaping, HVAC, roofing, plumbing, and electrical — typically 1–10 person shops where speed-to-lead decides who wins the job." },
    ],
  },
  {
    cat: "The system",
    items: [
      { q: "How fast does the missed-call text-back actually fire?", a: "Sub-second from our system. Your customer sees it in 5–10 seconds depending on their carrier. Fastest end-to-end is around 47 seconds from missed call to first reply back." },
      { q: "Will the auto-reply sound like a robot?", a: "No. We write the templates in your voice with your name, your shop's tone, and the specific question they reached out about. Customers regularly think they're texting you directly." },
      { q: "What if a lead asks something the system can't handle?", a: "It pauses and pings you. You take over from your phone. Most owners step in maybe twice a week — everything else handles itself." },
      { q: "Does this replace my CRM?", a: "It can, but it doesn't have to. We plug into Jobber, ServiceTitan, Housecall Pro, HubSpot, and most home-service stacks. If you've got nothing yet, our unified inbox covers calls, texts, email, and forms." },
    ],
  },
  {
    cat: "The website",
    items: [
      { q: "How does the free website work?", a: "When you're an active CleanerClicks customer, your site is included — design, build, hosting, content updates, the lot. Cancel and you can take the site with you for a one-time export fee." },
      { q: "Can you migrate from my existing site?", a: "Yes. We preserve your SEO equity, set up redirects, and move over content you want to keep. Usually we end up rewriting most of it because the conversion uplift is significant." },
      { q: "What if I already have a designer / agency?", a: "They can keep doing what they do. We replace the conversion engine and lead workflow — the part most agencies don't actually build. Plenty of customers run us alongside their existing brand team." },
    ],
  },
  {
    cat: "Setup & onboarding",
    items: [
      { q: "How long does setup take?", a: "Two weeks from signed agreement to live. We handle copy, design, integrations, number porting, and training. You give us 90 minutes total." },
      { q: "What do I have to do?", a: "30-minute kickoff. 30-minute review. 30-minute training. That's it. We can run the kickoff during your lunch break." },
      { q: "Will you port my existing phone number?", a: "Yes. We keep your number; calls and texts route through CleanerClicks for tracking and auto-replies. Customers never see a different number." },
    ],
  },
  {
    cat: "Pricing & contracts",
    items: [
      { q: "How much is it?", a: "Three tiers. Essentials is $197/mo — website, hosting, domain, logo, automated review responses, quote forms, and missed-call text back. Professional is $297/mo and adds 1-year lead follow-up, the 4–5★ review filter, live chat, customer confirmations, a unified inbox, and full support access. Elite is $497/mo and adds a full SEO program so customers find you on Google first. No setup fees, no per-seat upcharges." },
      { q: "Is there a contract?", a: "Month-to-month. Cancel any time. We have a 92% retention rate not because of contracts but because the math works." },
    ],
  },
  {
    cat: "Industries & fit",
    items: [
      { q: "Which trades is this built for?", a: "Roofing, HVAC, plumbing, electrical, cleaning, landscaping, pest control, garage door, locksmith — basically any local home service where speed-to-lead matters." },
      { q: "Are you a fit for a 1-person shop?", a: "Yes. Most of our customers are 1–10 person shops. The smaller you are, the more leverage automation gives you." },
      { q: "Are you a fit for a 50-truck operation?", a: "Also yes — but at that size you usually have a marketing director who wants more control than our standard package gives. Talk to us, we'll figure out the right shape." },
    ],
  },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div className="cc-faq__item" data-open={open}>
      <button className="cc-faq__q" onClick={onClick}>
        <span>{q}</span>
        <span className="cc-faq__icon"><Icon.plus size={12} stroke={2.4} /></span>
      </button>
      <div className="cc-faq__a">{a}</div>
    </div>
  );
}

function FAQPage() {
  const [openKey, setOpenKey] = useStateF("0-0");
  const [search, setSearch] = useStateF("");
  const [activeCat, setActiveCat] = useStateF("All");

  const norm = (s) => s.toLowerCase();
  const filtered = FAQ_GROUPS.map((g, gi) => ({
    ...g,
    gi,
    items: g.items
      .map((it, ii) => ({ ...it, key: `${gi}-${ii}` }))
      .filter((it) => !search || norm(it.q + " " + it.a).includes(norm(search))),
  })).filter((g) => (activeCat === "All" || g.cat === activeCat) && g.items.length > 0);

  return (
    <Layout active="faq">
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, answered.</>}
        sub="If something isn't here, the 20-min call covers it. No pitch, no slideshow — we just answer your questions."
        cta="Ask us directly"
      />

      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "260px 1fr", gap: 48, alignItems: "start" }}>
            {/* Sidebar */}
            <aside style={{ position: window.innerWidth < 900 ? "static" : "sticky", top: 96 }}>
              {/* search */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px",
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 999,
                marginBottom: 20,
              }}>
                <Icon.search size={14} style={{ color: "hsl(var(--muted-foreground))" }} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search questions…"
                  style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14, minWidth: 0 }}
                />
              </div>

              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 12 }}>CATEGORIES</div>
              <div style={{ display: "flex", flexDirection: window.innerWidth < 900 ? "row" : "column", gap: 4, flexWrap: "wrap" }}>
                {["All", ...FAQ_GROUPS.map((g) => g.cat)].map((c) => (
                  <button key={c} onClick={() => setActiveCat(c)} style={{
                    padding: "8px 12px",
                    textAlign: "left",
                    fontSize: 14,
                    fontWeight: 500,
                    background: activeCat === c ? "hsl(var(--muted))" : "transparent",
                    color: activeCat === c ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}>{c}</button>
                ))}
              </div>
            </aside>

            {/* Content */}
            <div>
              {filtered.length === 0 && (
                <div style={{ padding: 32, textAlign: "center", color: "hsl(var(--muted-foreground))", border: "1px dashed hsl(var(--border))", borderRadius: 16 }}>
                  No questions match "{search}". Try a different word, or <a className="cc-link" href="/book-a-call">ask us directly</a>.
                </div>
              )}
              {filtered.map((g) => (
                <div key={g.cat} style={{ marginBottom: 40 }}>
                  <h2 style={{ fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 4, fontWeight: 500 }}>
                    {g.cat}
                  </h2>
                  <div>
                    {g.items.map((it) => (
                      <FAQItem
                        key={it.key}
                        q={it.q}
                        a={it.a}
                        open={openKey === it.key}
                        onClick={() => setOpenKey(openKey === it.key ? null : it.key)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock title="Got a question we missed?" sub="We answer every email within a business day. Or jump on a 20-min call." cta="Ask on a call" />
    </Layout>
  );
}

export default FAQPage;
