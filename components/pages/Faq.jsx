"use client";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock, useViewportWidth } from "@/components/shared";
import React from "react";
const { useState: useStateF } = React;

const FAQ_GROUPS = [
  {
    cat: "Start here",
    items: [
      {
        q: "What does BlackCat Marketing do?",
        a: "We're a marketing agency that works exclusively with construction companies. We run three things: Google Local Services Ads (LSA), websites and local SEO, and Google Business Profile (GMB) optimization. The goal is always the same — get you into the top 3 where homeowners are searching, and get qualified estimates onto your calendar.",
      },
      {
        q: "Why do you only work with construction companies?",
        a: "Because specialists beat generalists. The keyword patterns, the Google Guaranteed verification process, the seasonality, the ticket sizes, and what separates a real lead from a tire-kicker are all specific to construction. An agency serving twenty industries spends your first two months learning your business. We start on day one already knowing it.",
      },
      {
        q: "Which trades do you take on?",
        a: "General contractors, roofers, concrete and foundation crews, remodelers, framers, deck and fence builders, custom home builders, excavation and sitework, and specialty trades like windows, siding, stucco, masonry and waterproofing. If you build, remodel or repair structures, you're in scope.",
      },
      {
        q: "Do you work with contractors outside my area, including my competitors?",
        a: "We don't run two directly competing companies in the same service area for the same keyword set — you'd just be paying us to bid against yourself. Ask on the call whether your market is already taken.",
      },
    ],
  },
  {
    cat: "LSA ads",
    items: [
      {
        q: "What are Local Services Ads, exactly?",
        a: "They're the listings that appear at the very top of Google — above the regular paid ads and above the map pack — with a Google Guaranteed badge next to the business name. Unlike normal Google Ads, you're charged per lead (a call or message from a homeowner) rather than per click.",
      },
      {
        q: "How much does LSA cost?",
        a: "$500/month for our management, plus your ad spend paid directly to Google. We run to a $50/day ceiling by default — about $1,500/month — which is the level where our 5-lead guarantee holds. You can raise the daily budget any time you want more volume, and the $500 management fee doesn't change.",
      },
      {
        q: "Do you mark up the ad spend?",
        a: "No. Google bills your card directly. We never touch the money and never take a percentage of it.",
      },
      {
        q: "What if the LSA ads don't produce 5 leads in 30 days?",
        a: "We pay for your LSA ad spend until you hit 5 leads, and you keep every lead that comes in along the way. The conditions are that the 30 days start when the campaign actually goes live (not when you sign), your Google Guaranteed verification stays approved, the budget stays at the agreed level, and you answer the calls during your campaign hours. Full terms are on the guarantee page.",
      },
      {
        q: "How long before LSA goes live?",
        a: "Usually one to three weeks. Google has to verify your license, your general liability insurance, and run background checks on the business and its owner. We prepare and submit all of it, but Google controls the timeline.",
      },
      {
        q: "What happens when I get a junk lead?",
        a: "You dispute it and Google credits you back. We file those disputes for you every week — wrong service, out of area, spam, duplicates. Most contractors running LSA themselves never bother, which is why their cost per lead looks worse than it should.",
      },
      {
        q: "What actually makes an LSA campaign rank?",
        a: "Your review count and rating, your responsiveness (how fast and how often you answer), your proximity to the searcher, and your budget. The first two are where most of the gains are, which is why our review process runs alongside the ads.",
      },
    ],
  },
  {
    cat: "Website, SEO & GMB",
    items: [
      {
        q: "What's included in the $5,000/month?",
        a: "The whole organic side: a custom website designed, built, hosted and maintained; service-area and service-type landing pages; project galleries and quote forms; full local SEO including monthly content, on-page optimization, citation cleanup and link building; and complete Google Business Profile management. No setup fee, no build fee, no per-page charges.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. The domain stays registered in your name on your account. If you leave, you keep the content and the domain — ask us on the call how the handover works for the build itself.",
      },
      {
        q: "I already have a website. Do I have to replace it?",
        a: "Not necessarily. If it's fast, converts, and we can work on it, we'll optimize what you have. If it's a slow template that buries your phone number, we'll tell you straight — rebuilding is usually cheaper than fighting it.",
      },
      {
        q: "Why does GMB matter so much?",
        a: "Because the map pack is the top 3 local results, and the map pack is driven almost entirely by your Google Business Profile. Wrong categories, missing services, or an incorrectly configured service area will keep you out of it no matter how good your website is. It's the single most common thing we find broken.",
      },
      {
        q: "How do you get reviews?",
        a: "A request goes out after every completed job, timed to when the homeowner is most likely to respond. We respond to every review that comes in, good or bad — Google weights that, and so do homeowners reading them.",
      },
      {
        q: "How long until SEO works?",
        a: "The map pack usually moves inside 90 days, which is why that's what we guarantee. Broader organic rankings for competitive terms keep improving through month six and beyond. Anyone promising you page one in three weeks is either lying or about to get your profile suspended.",
      },
    ],
  },
  {
    cat: "The guarantees",
    items: [
      {
        q: "What exactly is the top-3 guarantee?",
        a: "Within 90 days of your Google Business Profile going live under our management, you rank in the top 3 of the map pack for the target keywords and service area we agree on in writing at kickoff. If we miss it, we keep working the campaign at no charge until you get there — you stop paying at day 90 and the work continues free.",
      },
      {
        q: "What counts as \"top 3\"?",
        a: "Position 1, 2 or 3 in the Google map pack, measured from inside your primary service area, on the specific keywords agreed during onboarding. It isn't every possible search term anyone could type — that's why we agree the list in writing up front and show it to you before work starts.",
      },
      {
        q: "Why do the guarantees have conditions?",
        a: "Because both of them depend partly on you. We can't rank a profile we don't have access to, and Google won't send leads to a company that doesn't answer the phone. Every condition is published on the guarantee page before you sign anything, so there's nothing to argue about later.",
      },
      {
        q: "Are you guaranteeing revenue?",
        a: "No, and be careful with anyone who does. We guarantee our own performance — where you rank and how many leads arrive — plus continued work or covered ad spend if we miss. What a lead is worth depends on your pricing, your close rate, and how you run an estimate.",
      },
    ],
  },
  {
    cat: "Pricing & contracts",
    items: [
      {
        q: "Can I run just one of the two plans?",
        a: "Yes. Plenty of contractors start with LSA at $500/month plus spend to get the phone ringing this month, then add the $5,000/month program once they've seen it work. Others start with SEO because they want to stop renting leads. Both are fine.",
      },
      {
        q: "What does it cost to run both?",
        a: "$5,500/month, plus LSA ad spend billed by Google — up to $1,500/month at our standard $50/day ceiling. There's no bundle discount and no setup fee.",
      },
      {
        q: "Is there a contract?",
        a: "Both plans are month to month. The top-3 guarantee assumes you stay for the full 90 days, because that's how long the work takes to compound — but you're not locked in beyond that.",
      },
      {
        q: "Are there setup fees?",
        a: "No. No setup fee, no build fee, no per-page or per-keyword charges. The only things you'll pay for outside our invoice are your LSA ad spend (to Google), your domain registration (about $15/year, in your name), and optional professional photography if you want it.",
      },
    ],
  },
  {
    cat: "Getting started",
    items: [
      {
        q: "What happens on the 20-minute call?",
        a: "We pull up your Google Business Profile and your three closest competitors live, and show you where you actually stand. Then we tell you which plan we'd start with and whether we'd put our guarantees on your market. No slide deck.",
      },
      {
        q: "How much of my time does this take?",
        a: "About two hours total, most of it in week one. A 60-minute kickoff call, an email with your license and insurance documents, admin access to your Google profile and domain, some job photos off your phone, and one round of approvals. After that you answer the phone and we handle the rest.",
      },
      {
        q: "What if my market is too competitive?",
        a: "We'll tell you on the call. If we don't think we can hit the guarantees in your city, we won't sign you — a guarantee we'd have to weasel out of isn't worth offering.",
      },
      {
        q: "What if I'm a one-truck operation?",
        a: "That's fine, as long as you can handle the work the leads generate. Being honest about capacity matters more than size — there's no point buying leads you can't service, and it'll wreck your reviews.",
      },
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
  const vw = useViewportWidth();
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

  const narrow = vw < 900;

  return (
    <Layout active="faq">
      <PageHero
        eyebrow="FAQ"
        title={<>Questions, answered.</>}
        sub="Pricing, guarantees, LSA verification, how long SEO takes. If something isn't here, the 20-minute call covers it — no pitch, we just answer."
        cta="Ask us directly"
      />

      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "260px 1fr", gap: 48, alignItems: "start" }}>
            {/* Sidebar */}
            <aside style={{ position: narrow ? "static" : "sticky", top: 96 }}>
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
              <div style={{ display: "flex", flexDirection: narrow ? "row" : "column", gap: 4, flexWrap: "wrap" }}>
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

      <CTABlock title="Got a question we missed?" sub="We answer every email within a business day. Or jump on a 20-minute call and ask it live." cta="Ask on a call" />
    </Layout>
  );
}

export default FAQPage;
