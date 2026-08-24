"use client";
import { Layout, CTABlock, useViewportWidth } from "@/components/shared";
import { Sections1 } from "@/components/sections1";
import { Sections2 } from "@/components/sections2";
import { Sections3 } from "@/components/sections3";
import { PlanGrid } from "@/components/plans";
import { Icon } from "@/components/icons";

function ServiceTeaser({ icon, title, body, href }) {
  return (
    <a href={href} style={{
      display: "block",
      padding: 28,
      background: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 16,
      transition: "all 0.2s var(--ease-default)",
      cursor: "pointer",
      height: "100%",
    }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
       onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border))"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: "hsl(var(--accent-soft))",
        color: "hsl(var(--accent))",
        display: "grid", placeItems: "center",
        marginBottom: 20,
      }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 14.5, color: "hsl(var(--muted-foreground))", lineHeight: 1.55, marginBottom: 14 }}>{body}</div>
      <span className="cc-link">Learn more <Icon.arrowRight size={14} /></span>
    </a>
  );
}

function HomePage() {
  const vw = useViewportWidth();
  const narrow = vw < 900;
  return (
    <Layout active="home">
      <Sections1.Hero />

      <Sections1.Trades />

      {/* Three services, one line each */}
      <section className="cc-section cc-section--dark" id="services-teaser">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHAT WE DO</div>
            <h2 className="cc-h2" style={{ maxWidth: 760, margin: "0 auto" }}>
              Three services. All of them aimed at the same thing.
            </h2>
            <p className="cc-lede" style={{ margin: "16px auto 0" }}>
              More qualified estimates on your calendar, from homeowners who found you first.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            <ServiceTeaser
              icon={<Icon.google size={20} stroke={1.8} />}
              title="Google LSA Ads"
              body="Top of the page, Google Guaranteed badge, pay per lead instead of per click. $500/mo plus ad spend — and 5 leads in your first 30 days or we cover the ads."
              href="/lsa-ads"
            />
            <ServiceTeaser
              icon={<Icon.search size={20} stroke={1.8} />}
              title="Website & SEO"
              body="A fast, mobile-first site built to book estimates, backed by a local SEO program targeting the searches that end in a signed contract."
              href="/services#website"
            />
            <ServiceTeaser
              icon={<Icon.mapPin size={20} stroke={1.8} />}
              title="GMB Optimization"
              body="Your Google Business Profile rebuilt and managed — categories, services, service areas, photos, Q&A and reviews — until you're in the top 3."
              href="/services#gmb"
            />
          </div>
        </div>
      </section>

      {/* The two guarantees */}
      <Sections3.Guarantees />

      {/* Feature deep-dive with visual mocks */}
      <Sections2.Features />

      {/* 90-day plan */}
      <Sections2.HowItWorks />

      {/* Why construction only */}
      <Sections2.WhyConstructionSection />

      {/* Pricing preview */}
      <section className="cc-section cc-section--card" id="pricing-preview">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>PRICING</div>
            <h2 className="cc-h2" style={{ maxWidth: 720, margin: "0 auto" }}>
              Two plans. Run one, or run both.
            </h2>
            <p className="cc-lede" style={{ margin: "16px auto 0" }}>
              No setup fees. No long contracts. Both month to month.
            </p>
          </div>
          <PlanGrid compact />
          <p style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "hsl(var(--muted-foreground))",
          }}>
            <a href="/pricing" className="cc-link" style={{ display: "inline-flex" }}>
              Full pricing breakdown <Icon.arrowRight size={14} />
            </a>
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="cc-section cc-section--dark">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: vw < 700 ? "1fr 1fr" : "repeat(4, 1fr)", gap: 24 }}>
            {[
              { n: "Top 3", l: "target in 90 days" },
              { n: "5", l: "LSA leads in 30 days" },
              { n: "$0", l: "setup fees" },
              { n: "1", l: "industry we serve" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center", padding: "16px 8px" }}>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 8, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sections3.Testimonials />

      <Sections3.FAQ />

      {/* About — plain-language who/what/who-for for humans and crawlers */}
      <section className="cc-section cc-section--card" id="about">
        <div className="cc-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "0.8fr 1.2fr",
            gap: narrow ? 24 : 64,
            alignItems: "start",
            padding: narrow ? "8px 0" : "16px 0",
          }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>ABOUT BLACKCAT</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                The marketing department your construction company never had to hire.
              </h2>
            </div>
            <div className="cc-stack-sm" style={{ fontSize: 17, lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "hsl(var(--foreground))" }}>BlackCat Marketing is a construction-only marketing agency.</strong>{" "}
                We run Google Local Services Ads, build and maintain websites, run local SEO, and
                manage Google Business Profiles — for general contractors, roofers, concrete and
                foundation crews, remodelers, framers, deck and fence builders, and custom home builders.
              </p>
              <p style={{ margin: 0 }}>
                We don't take clients outside the trade. That's the whole point: every keyword list,
                every landing page, every Google Guaranteed application and every dispute we file
                is one we've done before, for a company that does what you do.
              </p>
              <p style={{ margin: 0 }}>
                Two ways to work with us —{" "}
                <a href="/lsa-ads" className="cc-link" style={{ display: "inline-flex" }}>LSA ads at $500/month plus spend</a>, or the full{" "}
                <a href="/services" className="cc-link" style={{ display: "inline-flex" }}>website, SEO and GMB program at $5,000/month</a>.
                Both come with a guarantee in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}

export default HomePage;
