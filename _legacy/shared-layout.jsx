/* global React, ReactDOM, Icon, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakColor */
// Shared layout: Nav + Footer + tweaks wrapper for every page.
const { useState: useStateL, useEffect: useEffectL, useRef: useRefL } = React;

// Brand mark — renders both light and dark versions, CSS hides the off-theme one.
// Mobile gets a compact icon-only square; desktop gets the horizontal wordmark.
function BrandLogo({ compact }) {
  if (compact) {
    return (
      <picture>
        <source srcSet="assets/logo-icon-square.webp" type="image/webp" />
        <img
          src="assets/logo-icon-square.png"
          alt="CleanerClicks logo"
          width="32"
          height="32"
          className="cc-brand__icon"
        />
      </picture>
    );
  }
  return (
    <>
      <picture className="cc-brand__img cc-brand__img--light">
        <source srcSet="assets/logo-horizontal.webp" type="image/webp" />
        <img
          src="assets/logo-horizontal.png"
          alt="CleanerClicks logo"
          width="547"
          height="118"
          className="cc-brand__img cc-brand__img--light"
        />
      </picture>
      <picture className="cc-brand__img cc-brand__img--dark">
        <source srcSet="assets/logo-horizontal-dark.webp" type="image/webp" />
        <img
          src="assets/logo-horizontal-dark.png"
          alt="CleanerClicks logo"
          width="547"
          height="118"
          className="cc-brand__img cc-brand__img--dark"
        />
      </picture>
    </>
  );
}
const SERVICES_DROPDOWN = {
  features: [
    {
      title: "Missed Call Text Back",
      desc: "Auto-text every missed call in under a minute — keep the lead warm while you're on the roof.",
      href: "/services#missed-call",
      icon: "phoneMissed",
      mockKind: "sms",
    },
    {
      title: "5★ Review Engine",
      desc: "Job done → one-tap Google review. Watch the animated flow end-to-end.",
      href: "/review-engine",
      icon: "star",
      mockKind: "stars",
    },
  ],
  items: [
    { title: "1-Year Follow-Up", desc: "52 touchpoints across SMS, email, voicemail.", href: "/services#follow-up", icon: "refresh" },
    { title: "High-Converting Website", desc: "Designed, built, and hosted by us.", href: "/services#website", icon: "globe" },
    { title: "Smart Lead Capture", desc: "Forms, click-to-call, source tracking.", href: "/services#forms", icon: "form" },
    { title: "All services overview", desc: "Every system, side by side.", href: "/services", icon: "arrowRight" },
  ],
};

const HOW_DROPDOWN = {
  features: [
    {
      title: "The 4-step flow",
      desc: "Click through each stage from missed call to booked job.",
      href: "/how-it-works#how",
      icon: "bolt",
      mockKind: "steps",
    },
    {
      title: "Animated review demo",
      desc: "Watch a 5★ review get collected, end-to-end, in real time.",
      href: "/review-engine",
      icon: "play",
      mockKind: "stars",
    },
  ],
  items: [
    { title: "Live missed-call demo", desc: "Press play, watch it run.", href: "/how-it-works#live-demo", icon: "phone" },
    { title: "14-day setup timeline", desc: "From signed agreement to live.", href: "/how-it-works#setup-timeline", icon: "calendar" },
    { title: "Why automation works", desc: "Sales team that never clocks out.", href: "/how-it-works#proof", icon: "trending" },
    { title: "Book a walkthrough", desc: "20 min, no slides.", href: "/book-a-call", icon: "arrowUpRight" },
  ],
};

const NAV_LINKS = [
  { label: "Services", href: "/services", key: "services", dropdown: SERVICES_DROPDOWN },
  { label: "How it works", href: "/how-it-works", key: "how-it-works", dropdown: HOW_DROPDOWN },
  { label: "Pricing", href: "/pricing", key: "pricing" },
  { label: "Results", href: "/results", key: "results" },
  { label: "FAQ", href: "/faq", key: "faq" },
];

// Renders the visual mock at the bottom of a featured dropdown card.
function FeatureMock({ kind }) {
  if (kind === "sms") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
        <div style={{ alignSelf: "flex-start", background: "hsl(var(--muted))", borderRadius: 12, borderBottomLeftRadius: 3, padding: "5px 10px", fontSize: 10.5, color: "hsl(var(--subtle-foreground))", maxWidth: "75%" }}>
          Sorry we missed you — what's going on?
        </div>
        <div style={{ alignSelf: "flex-end", background: "hsl(var(--accent))", color: "white", borderRadius: 12, borderBottomRightRadius: 3, padding: "5px 10px", fontSize: 10.5, maxWidth: "70%" }}>
          AC stopped. Today?
        </div>
      </div>
    );
  }
  if (kind === "stars") {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", gap: 3 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon.star key={i} size={18} stroke={0} style={{ fill: "#f59e0b" }} />
          ))}
        </div>
        <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "hsl(var(--muted-foreground))", letterSpacing: "0.04em" }}>
          4.9 · 412
        </div>
      </div>
    );
  }
  if (kind === "steps") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%" }}>
        {[1, 2, 3, 4].map((n, i) => (
          <React.Fragment key={n}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%",
              background: i < 2 ? "hsl(var(--foreground))" : "hsl(var(--card))",
              border: "1px solid hsl(var(--border-strong))",
              color: i < 2 ? "hsl(var(--background))" : "hsl(var(--muted-foreground))",
              display: "grid", placeItems: "center",
              fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
              flexShrink: 0,
            }}>{n}</div>
            {i < 3 && <div style={{ flex: 1, height: 1, background: i < 1 ? "hsl(var(--foreground))" : "hsl(var(--border-strong))" }} />}
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
        <a href="/" className="cc-nav__brand cc-brand">
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
            <a href="https://portal.cleanerclicks.com" className="cc-btn cc-btn--ghost cc-btn--sm">
              Client Login
            </a>
          )}
          <a href="/book-a-call" className="cc-btn cc-btn--sm">
            Book a Call <Icon.arrowUpRight size={14} />
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
            <a href="https://portal.cleanerclicks.com" className="cc-nav__link" style={{ display: "block", padding: "12px 8px", fontWeight: 600 }}>
              Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// Real business contact + social profiles, surfaced in the footer.
// phoneLabel is intentionally empty until the real number is provided —
// the phone row stays hidden rather than showing a placeholder.
const CONTACT = {
  phoneLabel: "(555) 000-0000",
  phoneHref: "+15550000000",
  email: "hello@example.com",
  location: "Fargo, North Dakota",
};
const SOCIALS = [
  { icon: "instagram", label: "CleanerClicks on Instagram", href: "https://www.instagram.com/cleanerclicks" },
  { icon: "instagram", label: "Adam Selman on Instagram", href: "https://www.instagram.com/adammselman" },
  { icon: "linkedin", label: "Adam Selman on LinkedIn", href: "https://www.linkedin.com/in/adam-selman/" },
  { icon: "youtube", label: "CleanerClicks on YouTube", href: "https://www.youtube.com/@cleanerclicks" },
];

function Footer() {
  const cols = [
    { h: "Product", links: [
      { l: "Services overview", href: "/services" },
      { l: "How it works", href: "/how-it-works" },
      { l: "Pricing", href: "/pricing" },
      { l: "Results", href: "/results" },
      { l: "FAQ", href: "/faq" },
    ]},
    { h: "Industries", links: [
      { l: "Roofing", href: "/services" },
      { l: "HVAC", href: "/services" },
      { l: "Plumbing", href: "/services" },
      { l: "Electrical", href: "/services" },
      { l: "Cleaning", href: "/services" },
      { l: "Pest control", href: "/services" },
    ]},
    { h: "Company", links: [
      { l: "Book a call", href: "/book-a-call" },
      { l: "Contact", href: "/book-a-call" },
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
              The lead-capture and follow-up system for home-service businesses. More calls, more replies, more booked jobs.
            </p>

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0 0", fontSize: 13.5 }}>
              <a href={`tel:${CONTACT.phoneHref}`} style={{ display: CONTACT.phoneLabel ? "inline-flex" : "none", alignItems: "center", gap: 9, color: "hsl(var(--foreground))", textDecoration: "none", fontWeight: 500 }}>
                <Icon.phone size={15} style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0 }} /> {CONTACT.phoneLabel}
              </a>
              <a href={`mailto:${CONTACT.email}`} style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "hsl(var(--muted-foreground))", textDecoration: "none" }}>
                <Icon.mail size={15} style={{ flexShrink: 0 }} /> Email us
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
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}
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
          <span>© 2026 CleanerClicks Inc.</span>
          <span style={{ display: "inline-flex", gap: 18, flexWrap: "wrap" }}>
            <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms &amp; Conditions</a>
          </span>
          <span>v2.4 · BUILT IN FARGO, ND</span>
        </div>
      </div>
    </footer>
  );
}

// Small page-hero used by inner pages (not the home hero, that's its own thing).
function PageHero({ eyebrow, title, sub, cta, ctaHref = "/book-a-call", children }) {
  return (
    <section className="cc-section" style={{ paddingTop: 72, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
      <div className="cc-grid-bg" />
      <div className="cc-container" style={{ position: "relative" }}>
        <div className="cc-stack-md" style={{ maxWidth: 760 }}>
          {eyebrow && <div className="cc-eyebrow">{eyebrow}</div>}
          <h1 className="cc-h1" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>{title}</h1>
          {sub && <p className="cc-lede" style={{ maxWidth: 640 }}>{sub}</p>}
          {cta && (
            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
              <a href={ctaHref} className="cc-btn">{cta} <Icon.arrowUpRight size={14} /></a>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Small "in-page CTA" block reused on every subpage
function CTABlock({ title = "Ready to stop losing jobs to voicemail?", sub = "20-minute call. No slideshow, no pressure. We'll show you what you'd recover from missed calls alone.", cta = "Book a 20-min call" }) {
  return (
    <section className="cc-section" style={{ padding: "32px 0 96px" }}>
      <div className="cc-container">
        <div style={{
          padding: "64px 32px",
          textAlign: "center",
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: 24,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Animated water ripple background */}
          <div className="cc-ripple-bg" aria-hidden="true">
            <div className="cc-ripple-bg__src" style={{ top: "32%", left: "14%", "--ripple-duration": "7s", "--ripple-delay": "0s" }} />
            <div className="cc-ripple-bg__src" style={{ top: "70%", left: "52%", "--ripple-duration": "6s", "--ripple-delay": "-2s" }} />
            <div className="cc-ripple-bg__src" style={{ top: "28%", left: "84%", "--ripple-duration": "8s", "--ripple-delay": "-4s" }} />
            <div className="cc-ripple-bg__src" style={{ top: "78%", left: "22%", "--ripple-duration": "9s", "--ripple-delay": "-3s" }} />
            <div className="cc-ripple-bg__src" style={{ top: "20%", left: "60%", "--ripple-duration": "7.5s", "--ripple-delay": "-5s" }} />
            <div className="cc-ripple-bg__shimmer" />
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
  "dark": false,
  "accent": "#7C3AED"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  "#2563EB": { h: 217, s: 91, l: 60, soft_l: 96 },
  "#0F172A": { h: 222, s: 47, l: 11, soft_l: 96 },
  "#059669": { h: 158, s: 91, l: 32, soft_l: 94 },
  "#7C3AED": { h: 262, s: 83, l: 58, soft_l: 96 },
};

function Layout({ active, children }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_SHARED);
  useEffectL(() => {
    const root = document.documentElement;
    const preset = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS["#2563EB"];
    root.style.setProperty("--accent", `${preset.h} ${preset.s}% ${preset.l}%`);
    root.style.setProperty("--accent-soft", `${preset.h} ${preset.s}% ${preset.soft_l}%`);
    root.style.setProperty("--ring", `${preset.h} ${preset.s}% ${preset.l}%`);
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
            options={["#2563EB", "#0F172A", "#059669", "#7C3AED"]}
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

window.Shared = { Nav, Footer, Layout, PageHero, CTABlock, NAV_LINKS };
