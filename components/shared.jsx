"use client";
// Shared layout: Nav + Footer + tweaks wrapper for every page.
import React from "react";
import { Icon } from "./icons";
import { TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakColor } from "./tweaks";
const { useState: useStateL, useEffect: useEffectL, useRef: useRefL } = React;

// ── Business facts, in one place ──────────────────────────────────────────────
// Every price, promise, and contact detail on the site reads from here so there
// is exactly one thing to edit when something changes.
const BRAND = {
  name: "BlackCat Marketing",
  tagline: "Marketing built for construction companies. Nothing else.",
  lsaMonthly: 500,
  lsaDailyCap: 50,
  growthMonthly: 5000,
  rankWindowDays: 90,
  leadGuaranteeCount: 5,
  leadGuaranteeDays: 30,
};

// ⚠️ REPLACE BEFORE LAUNCH — see README.
const CONTACT = {
  phoneLabel: "(217) 402-4861",
  phoneHref: "+12174024861",
  // Set this once a real inbox exists (e.g. hello@yourdomain.com). While it is
  // empty the footer row hides itself and the legal pages point at the phone
  // number instead — nothing on the site advertises an address that bounces.
  email: "",
  location: "Champaign, IL · serving contractors nationwide",
};
// ⚠️ REPLACE BEFORE LAUNCH — point these at real profiles, or delete the rows.
const SOCIALS = [
  { icon: "instagram", label: "BlackCat Marketing on Instagram", href: "https://www.instagram.com/" },
  { icon: "linkedin", label: "BlackCat Marketing on LinkedIn", href: "https://www.linkedin.com/" },
  { icon: "facebook", label: "BlackCat Marketing on Facebook", href: "https://www.facebook.com/" },
  { icon: "youtube", label: "BlackCat Marketing on YouTube", href: "https://www.youtube.com/" },
];

// Brand mark — amber tile with a black cat silhouette, plus the wordmark.
// Colors are hard-coded (not tokens) so the mark is identical in both themes.
function BrandLogo({ compact }) {
  const cat = (
    <span className="cc-brand__cat">
      <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#0B0B0C"
          d="M3.5 2.75a.62.62 0 0 1 .99-.46L9.2 5.8a9.9 9.9 0 0 1 5.6 0l4.71-3.51a.62.62 0 0 1 .99.46l-.3 6.75c.52 1.1.8 2.29.8 3.53 0 4.4-4.3 7.72-9 7.72s-9-3.32-9-7.72c0-1.24.28-2.43.8-3.53z"
        />
        <ellipse cx="8.9" cy="12.6" rx="1.18" ry="1.62" fill="#F5A300" />
        <ellipse cx="15.1" cy="12.6" rx="1.18" ry="1.62" fill="#F5A300" />
      </svg>
    </span>
  );
  if (compact) return <span className="cc-brand__mark">{cat}</span>;
  return (
    <span className="cc-brand__mark">
      {cat}
      <span className="cc-brand__word">
        BlackCat <em>Marketing</em>
      </span>
    </span>
  );
}

const SERVICES_DROPDOWN = {
  features: [
    {
      title: "Google LSA Ads",
      desc: "Google Guaranteed leads at the very top of search — you pay per lead, not per click.",
      href: "/lsa-ads",
      icon: "google",
      mockKind: "lead",
    },
    {
      title: "Website, SEO & GMB",
      desc: "Top 3 of the map pack in 90 days, on a site built to turn traffic into estimates.",
      href: "/services#seo",
      icon: "search",
      mockKind: "rank",
    },
  ],
  items: [
    { title: "GMB optimization", desc: "Your Google profile, rebuilt to rank.", href: "/services#gmb", icon: "mapPin" },
    { title: "The 90-day plan", desc: "Week by week, what we actually do.", href: "/how-it-works", icon: "blueprint" },
    { title: "Our guarantees", desc: "5 leads in 30 days, or we pay the ads.", href: "/guarantee", icon: "badge" },
    { title: "Results", desc: "Rankings, leads, and booked estimates.", href: "/results", icon: "chart" },
  ],
};

const HOW_DROPDOWN = {
  features: [
    {
      title: "The 90-day roadmap",
      desc: "Foundation, framing, finish — the three phases to a top-3 map pack ranking.",
      href: "/how-it-works",
      icon: "blueprint",
      mockKind: "phases",
    },
    {
      title: "How LSA leads land",
      desc: "Watch a Google Guaranteed lead go from search to your phone.",
      href: "/lsa-ads",
      icon: "phone",
      mockKind: "lead",
    },
  ],
  items: [
    { title: "What we need from you", desc: "License, insurance, about 2 hours.", href: "/how-it-works#onboarding", icon: "check" },
    { title: "Reporting", desc: "Rank, leads, and cost per booked job.", href: "/how-it-works#reporting", icon: "chart" },
    { title: "Pricing", desc: "Two plans. No setup fees.", href: "/pricing", icon: "dollar" },
    { title: "Book a call", desc: "20 minutes, no slide deck.", href: "/book-a-call", icon: "arrowUpRight" },
  ],
};

const NAV_LINKS = [
  { label: "Services", href: "/services", key: "services", dropdown: SERVICES_DROPDOWN },
  { label: "How it works", href: "/how-it-works", key: "how-it-works", dropdown: HOW_DROPDOWN },
  { label: "Pricing", href: "/pricing", key: "pricing" },
  { label: "Guarantee", href: "/guarantee", key: "guarantee" },
  { label: "FAQ", href: "/faq", key: "faq" },
];

// Renders the visual mock at the bottom of a featured dropdown card.
function FeatureMock({ kind }) {
  if (kind === "lead") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Icon.phone size={13} stroke={2.2} />
        </span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>New lead · Kitchen remodel</div>
          <div style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-mono)" }}>
            Google Guaranteed · 2 min ago
          </div>
        </div>
      </div>
    );
  }
  if (kind === "rank") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
        {[
          { p: 1, n: "Competitor Concrete", you: false },
          { p: 2, n: "Your company", you: true },
        ].map((r) => (
          <div key={r.p} style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "4px 8px", borderRadius: 7,
            fontSize: 10.5,
            background: r.you ? "hsl(var(--accent-soft))" : "transparent",
            color: r.you ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
            fontWeight: r.you ? 600 : 400,
          }}>
            <span style={{ fontFamily: "var(--font-mono)" }}>#{r.p}</span>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.n}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "phases") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        {["30", "60", "90"].map((n, i) => (
          <React.Fragment key={n}>
            <div style={{
              padding: "3px 8px", borderRadius: 999,
              background: i < 2 ? "hsl(var(--foreground))" : "hsl(var(--card))",
              border: "1px solid hsl(var(--border-strong))",
              color: i < 2 ? "hsl(var(--background))" : "hsl(var(--muted-foreground))",
              fontFamily: "var(--font-mono)", fontSize: 9.5, fontWeight: 600,
              flexShrink: 0,
            }}>{n}d</div>
            {i < 2 && <div style={{ flex: 1, height: 1, background: i < 1 ? "hsl(var(--foreground))" : "hsl(var(--border-strong))" }} />}
          </React.Fragment>
        ))}
      </div>
    );
  }
  return null;
}

// Dropdown panel rendered alongside the trigger; CSS :hover on .cc-nav__item
// controls visibility (with a transition-delay so the panel stays open while
// the cursor moves between the trigger and the panel). No JS hover state.
function NavDropdown({ dropdown }) {
  return (
    <div className="cc-dropdown">
      <div className="cc-dropdown__features">
        {dropdown.features.map((f) => {
          const Ic = Icon[f.icon] || Icon.arrowRight;
          return (
            <a key={f.title} href={f.href} className="cc-dropdown__feature">
              <div className="cc-dropdown__feature-icon"><Ic size={18} /></div>
              <div className="cc-dropdown__feature-title">{f.title}</div>
              <div className="cc-dropdown__feature-desc">{f.desc}</div>
              <div className="cc-dropdown__feature-mock">
                <FeatureMock kind={f.mockKind} />
              </div>
            </a>
          );
        })}
      </div>
      <div className="cc-dropdown__items">
        {dropdown.items.map((it) => {
          const Ic = Icon[it.icon] || Icon.arrowRight;
          return (
            <a key={it.title} href={it.href} className="cc-dropdown__item">
              <div className="cc-dropdown__item-icon"><Ic size={15} /></div>
              <div>
                <div className="cc-dropdown__item-title">{it.title}</div>
                <div className="cc-dropdown__item-desc">{it.desc}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function NavItem({ link, active }) {
  const has = !!link.dropdown;
  return (
    <div className="cc-nav__item">
      <a
        href={link.href}
        className="cc-nav__link"
        data-active={active === link.key ? "true" : "false"}
        data-has-dropdown={has ? "true" : "false"}
        style={!has && active === link.key ? { color: "hsl(var(--foreground))", background: "hsl(var(--muted))" } : null}
        aria-haspopup={has ? "true" : undefined}
      >
        {link.label}
        {has && <Icon.chevronDown size={11} stroke={2} />}
      </a>
      {has && <NavDropdown dropdown={link.dropdown} />}
    </div>
  );
}

function Nav({ active }) {
  const [scrolled, setScrolled] = useStateL(false);
  const [mobileOpen, setMobileOpen] = useStateL(false);
  useEffectL(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;
  return (
    <nav className="cc-nav" data-scrolled={scrolled ? "true" : "false"}>
      <div className="cc-container cc-nav__inner">
        <a href="/" className="cc-nav__brand cc-brand" aria-label={`${BRAND.name} home`}>
          <BrandLogo compact={isMobile} />
        </a>
        {!isMobile && (
          <div className="cc-nav__links">
            {NAV_LINKS.map((l) => (
              <NavItem key={l.key} link={l} active={active} />
            ))}
          </div>
        )}
        <div className="cc-nav__cta">
          {!isMobile && (
            <a href={`tel:${CONTACT.phoneHref}`} className="cc-btn cc-btn--ghost cc-btn--sm">
              <Icon.phone size={13} /> {CONTACT.phoneLabel}
            </a>
          )}
          <a href="/book-a-call" className="cc-btn cc-btn--sm">
            Book a call <Icon.arrowUpRight size={14} />
          </a>
          {isMobile && (
            <button className="cc-btn cc-btn--ghost cc-btn--sm" style={{ width: 36, height: 36, padding: 0, justifyContent: "center", borderRadius: "50%" }} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <Icon.x size={16} /> : <Icon.menu size={16} />}
            </button>
          )}
        </div>
      </div>
      {isMobile && mobileOpen && (
        <div style={{ borderTop: "1px solid hsl(var(--border))", background: "hsl(var(--background))" }}>
          <div className="cc-container" style={{ padding: "12px 24px" }}>
            {NAV_LINKS.map((l) => (
              <React.Fragment key={l.key}>
                <a href={l.href} className="cc-nav__link" style={{ display: "block", padding: "12px 8px", fontWeight: 600 }}>
                  {l.label}
                </a>
                {l.dropdown && (
                  <div style={{ paddingLeft: 16, marginBottom: 4 }}>
                    {[...l.dropdown.features, ...l.dropdown.items].map((s) => (
                      <a key={s.title} href={s.href} className="cc-nav__link" style={{ display: "block", padding: "8px 8px", fontSize: 13, color: "hsl(var(--muted-foreground))" }}>
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <a href="/results" className="cc-nav__link" style={{ display: "block", padding: "12px 8px", fontWeight: 600 }}>
              Results
            </a>
            <a href={`tel:${CONTACT.phoneHref}`} className="cc-nav__link" style={{ display: "block", padding: "12px 8px", fontWeight: 600 }}>
              Call {CONTACT.phoneLabel}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const cols = [
    { h: "Services", links: [
      { l: "Google LSA ads", href: "/lsa-ads" },
      { l: "Website & SEO", href: "/services#seo" },
      { l: "GMB optimization", href: "/services#gmb" },
      { l: "Pricing", href: "/pricing" },
      { l: "Guarantees", href: "/guarantee" },
    ]},
    { h: "Who we work with", links: [
      { l: "General contractors", href: "/services" },
      { l: "Roofing", href: "/services" },
      { l: "Concrete & foundations", href: "/services" },
      { l: "Remodeling & additions", href: "/services" },
      { l: "Decks, fencing & outdoor", href: "/services" },
      { l: "Custom home builders", href: "/services" },
    ]},
    { h: "Company", links: [
      { l: "How it works", href: "/how-it-works" },
      { l: "Results", href: "/results" },
      { l: "FAQ", href: "/faq" },
      { l: "Book a call", href: "/book-a-call" },
      { l: "Privacy Policy", href: "/privacy" },
      { l: "Terms & Conditions", href: "/terms" },
    ]},
  ];
  return (
    <footer className="cc-footer">
      <div className="cc-container">
        <div className="cc-footer__grid">
          <div>
            <a href="/" className="cc-nav__brand cc-brand" style={{ marginBottom: 16, display: "inline-flex" }}>
              <BrandLogo />
            </a>
            <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, maxWidth: 300, margin: "12px 0 0" }}>
              We only work with construction companies. LSA ads, websites, SEO, and Google Business Profiles — built to put your crew in the top 3 and keep the phone ringing.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0 0", fontSize: 13.5 }}>
              <a href={`tel:${CONTACT.phoneHref}`} style={{ display: CONTACT.phoneLabel ? "inline-flex" : "none", alignItems: "center", gap: 9, color: "hsl(var(--foreground))", textDecoration: "none", fontWeight: 500 }}>
                <Icon.phone size={15} style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0 }} /> {CONTACT.phoneLabel}
              </a>
              <a href={`mailto:${CONTACT.email}`} style={{ display: CONTACT.email ? "inline-flex" : "none", alignItems: "center", gap: 9, color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>
                <Icon.mail size={15} style={{ flexShrink: 0 }} /> {CONTACT.email}
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "hsl(var(--muted-foreground))" }}>
                <Icon.mapPin size={15} style={{ flexShrink: 0 }} /> {CONTACT.location}
              </span>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {SOCIALS.map((s) => {
                const Ic = Icon[s.icon];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
                    style={{ width: 36, height: 36, borderRadius: 9, border: "1px solid hsl(var(--border))", display: "grid", placeItems: "center", color: "hsl(var(--muted-foreground))", background: "hsl(var(--card))", transition: "all 0.18s var(--ease-default)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "hsl(var(--accent))"; e.currentTarget.style.borderColor = "hsl(var(--accent))"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "hsl(var(--muted-foreground))"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}>
                    <Ic size={17} />
                  </a>
                );
              })}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="cc-footer__col">
              <h5>{c.h}</h5>
              {c.links.map((l) => <a key={l.l} href={l.href}>{l.l}</a>)}
            </div>
          ))}
        </div>
        <div className="cc-footer__bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}</span>
          <span style={{ display: "inline-flex", gap: 18, flexWrap: "wrap" }}>
            <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms &amp; Conditions</a>
          </span>
          <span>CONSTRUCTION MARKETING ONLY</span>
        </div>
      </div>
    </footer>
  );
}

// Small page-hero used by inner pages (not the home hero, that's its own thing).
function PageHero({ eyebrow, title, sub, cta, ctaHref = "/book-a-call", children }) {
  return (
    <section className="cc-section cc-section--card cc-section--hero">
      <div className="cc-container" style={{ position: "relative", textAlign: "center" }}>
        <div className="cc-stack-md" style={{ maxWidth: 760, margin: "0 auto", alignItems: "center" }}>
          {eyebrow && <div className="cc-eyebrow">{eyebrow}</div>}
          <h1 className="cc-h1" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>{title}</h1>
          {sub && <p className="cc-lede" style={{ maxWidth: 640, margin: "0 auto" }}>{sub}</p>}
          {cta && (
            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {typeof ctaHref === "string" && ctaHref.startsWith("#") ? (
                <button
                  type="button"
                  className="cc-btn"
                  onClick={() => {
                    const el = document.querySelector(ctaHref);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >{cta} <Icon.arrowUpRight size={14} /></button>
              ) : (
                <a href={ctaHref} className="cc-btn">{cta} <Icon.arrowUpRight size={14} /></a>
              )}
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Small "in-page CTA" block reused on every subpage
function CTABlock({
  title = "Ready to own the top 3 in your city?",
  sub = "20-minute call. We'll pull up your Google Business Profile and your competitors' rankings live, and tell you exactly where you stand.",
  cta = "Book a 20-min call",
}) {
  return (
    <section className="cc-section" style={{ padding: "32px 0 96px" }}>
      <div style={{ margin: "0 14px" }}>
        <div style={{
          padding: "104px 40px 136px",
          textAlign: "center",
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: 32,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Aurora glow fanning up from the bottom + dot grid */}
          <div className="cc-aurora" aria-hidden="true">
            <div className="cc-aurora__glow" />
            <div className="cc-aurora__dots" />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="cc-eyebrow" style={{ marginBottom: 12 }}>READY WHEN YOU ARE</div>
            <h2 className="cc-h2" style={{ maxWidth: 720, margin: "0 auto" }}>{title}</h2>
            <p className="cc-lede" style={{ margin: "16px auto 32px" }}>{sub}</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/book-a-call" className="cc-btn cc-btn--lg">{cta} <Icon.arrowUpRight size={14} /></a>
              <a href="/pricing" className="cc-btn cc-btn--ghost cc-btn--lg">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Layout wrapper: nav + page + footer + tweaks (accent/dark only — variant is per page)
const TWEAK_DEFAULTS_SHARED = /*EDITMODE-BEGIN*/{
  "dark": true,
  "accent": "#F5A300"
}/*EDITMODE-END*/;

// soft_l / soft_s are the "tinted surface" variants — they need different
// values per theme, since these land as inline styles on :root and therefore
// outrank the [data-theme="dark"] block in globals.css.
const ACCENT_PRESETS = {
  "#F5A300": { h: 38, s: 96, l: 48, soft_l: 94, dark_s: 55, dark_l: 15 },   // hi-vis amber (brand default)
  "#EA580C": { h: 21, s: 90, l: 48, soft_l: 95, dark_s: 60, dark_l: 15 },   // safety orange
  "#0F172A": { h: 222, s: 47, l: 24, soft_l: 95, dark_s: 30, dark_l: 20 },  // steel
  "#059669": { h: 158, s: 91, l: 32, soft_l: 94, dark_s: 50, dark_l: 14 },  // level green
};

function Layout({ active, children }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_SHARED);
  useEffectL(() => {
    const root = document.documentElement;
    const p = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS["#F5A300"];
    root.style.setProperty("--accent", `${p.h} ${p.s}% ${p.l}%`);
    root.style.setProperty(
      "--accent-soft",
      t.dark ? `${p.h} ${p.dark_s}% ${p.dark_l}%` : `${p.h} ${p.s}% ${p.soft_l}%`,
    );
    root.style.setProperty("--ring", `${p.h} ${p.s}% ${p.l}%`);
    root.dataset.theme = t.dark ? "dark" : "light";
  }, [t.accent, t.dark]);

  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Look & feel">
          <TweakColor
            label="Accent color"
            value={t.accent}
            options={["#F5A300", "#EA580C", "#0F172A", "#059669"]}
            onChange={(v) => setTweak("accent", v)}
          />
          <TweakToggle
            label="Dark mode"
            value={t.dark}
            onChange={(v) => setTweak("dark", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

export { Nav, Footer, Layout, PageHero, CTABlock, NAV_LINKS, BRAND, CONTACT };
