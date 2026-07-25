/* global React, ReactDOM, Shared, Sections1, Sections2, Sections3, Icon */
const { Layout, CTABlock } = Shared;
const { useState: useStateH } = React;

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
    }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--border-strong))"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
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
  return (
    <Layout active="home">
      <Sections1.Hero variant="A" />
      <Sections1.Trades />

      {/* Teaser grid linking to /services */}
      <section className="cc-section" id="features">
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>WHAT'S IN THE SYSTEM</div>
            <h2 className="cc-h2" style={{ maxWidth: 720, margin: "0 auto" }}>
              Five systems that work together. Plug them in once.
            </h2>
            <p className="cc-lede" style={{ margin: "16px auto 0" }}>
              They run every hour you don't.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
            <ServiceTeaser icon={<Icon.phoneMissed size={20} stroke={1.8} />} title="Missed Call Text Back" body="Auto-text every missed call in under a minute. Keep the lead warm while you're on the roof." href="/services#missed-call" />
            <ServiceTeaser icon={<Icon.refresh size={20} stroke={1.8} />} title="1-Year Follow-Up" body="52 touchpoints across SMS, email, and ringless voicemail. Pauses on reply, re-engages months later." href="/services#follow-up" />
            <ServiceTeaser icon={<Icon.globe size={20} stroke={1.8} />} title="High-Converting Website" body="Conversion-tuned pages with location landers, fast Core Web Vitals, and forms that actually route." href="/services#website" />
            <ServiceTeaser icon={<Icon.star size={20} stroke={1.8} />} title="5-Star Review Engine" body="Job done → one-tap Google review. Unhappy ones route to a private form so you can fix things." href="/services#reviews" />
            <ServiceTeaser icon={<Icon.form size={20} stroke={1.8} />} title="Smart Lead Capture" body="Forms, click-to-call, tracking, and routing — every lead lands in one inbox with full context." href="/services#forms" />
            <ServiceTeaser icon={<Icon.bolt size={20} stroke={1.8} />} title="Done-for-you setup" body="14 days from agreement to live. We handle copy, design, integrations, training. You give us 90 minutes." href="/how-it-works" />
          </div>
        </div>
      </section>

      {/* Narrative: how the booking system works — adds depth + keyword consistency */}
      <section className="cc-section" id="how-it-works-intro" style={{ paddingTop: 8 }}>
        <div className="cc-container">
          <div style={{ maxWidth: 780 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>HOW THE BOOKING SYSTEM WORKS</div>
            <h2 className="cc-h2" style={{ marginBottom: 24 }}>
              A booking system built around the missed call.
            </h2>
            <div className="cc-stack-sm" style={{ fontSize: 16.5, lineHeight: 1.7, color: "hsl(var(--muted-foreground))" }}>
              <p style={{ margin: 0 }}>
                For most home service businesses, the lead that gets away isn't lost to a competitor's better pitch — it's lost to <strong style={{ color: "hsl(var(--foreground))" }}>voicemail</strong>. You're on a roof, under a sink, or mid-install, and the phone rings out. By the time you call back that evening, the homeowner has already booked someone else. CleanerClicks is the booking system that closes that gap.
            </p>
              <p style={{ margin: 0 }}>
                The moment a call goes unanswered, our <strong style={{ color: "hsl(var(--foreground))" }}>missed call text back</strong> fires automatically — a friendly, on-brand text from your business that reaches the caller in seconds, while they're still holding the phone. Most replies come back within a minute, and the conversation moves to text, where busy homeowners actually respond. No new app, no extra steps for you.
              </p>
              <p style={{ margin: 0 }}>
                From there, the system keeps working. Leads that don't book right away drop into a <strong style={{ color: "hsl(var(--foreground))" }}>year-long follow-up</strong> sequence across text, email, and voicemail that pauses the instant someone replies. Every conversation lands in one inbox, so nothing slips. And once the job is done, the <strong style={{ color: "hsl(var(--foreground))" }}>review engine</strong> turns happy customers into five-star Google reviews that bring the next homeowner to your door. Capture the call, book the job, earn the review — on repeat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries we serve — meaningful, scannable copy per trade */}
      <section className="cc-section" id="industries" style={{ paddingTop: 56 }}>
        <div className="cc-container">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>INDUSTRIES WE SERVE</div>
            <h2 className="cc-h2" style={{ marginBottom: 16 }}>
              Built for the trades that live and die by speed-to-lead.
            </h2>
            <p className="cc-lede" style={{ margin: 0 }}>
              CleanerClicks works with home service businesses across the United States. If your customers call when something breaks and book whoever answers first, the booking system pays for itself.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "repeat(2, 1fr)", gap: window.innerWidth < 700 ? 20 : "28px 48px" }}>
            {[
              { t: "Roofing", d: "Storm-season demand spikes fast. We catch every inbound call and inspection request so your crews stay booked while competitors are still checking voicemail." },
              { t: "HVAC", d: "When the AC dies in July, the homeowner calls three companies and hires the first to text back. Our missed call text back makes sure that's you." },
              { t: "Plumbing", d: "Burst pipes don't wait. Instant replies and after-hours follow-up turn emergency calls into booked jobs instead of missed opportunities." },
              { t: "Electrical", d: "From panel upgrades to service calls, we capture the lead, qualify it over text, and route it to your schedule with full context." },
              { t: "Cleaning & pressure washing", d: "Recurring revenue lives in fast quotes and easy rebooking. Automated follow-up keeps one-time cleans coming back on a schedule." },
              { t: "Landscaping & pest control", d: "Seasonal work means seasonal lead surges. The system follows up for a full year, so spring leads still book come fall." },
            ].map((it) => (
              <div key={it.t} style={{ borderTop: "1px solid hsl(var(--border))", paddingTop: 18 }}>
                <div style={{ fontWeight: 650, fontSize: 17.5, letterSpacing: "-0.01em", marginBottom: 8 }}>{it.t}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce section — strong second-act pitch */}
      <Sections2.WorkforceSection />

      {/* Stat strip */}
      <section className="cc-section cc-section--band" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr 1fr" : "repeat(4, 1fr)", gap: 24 }}>
            {[
              { n: "2.4×", l: "more booked jobs" },
              { n: "47s", l: "avg reply time" },
              { n: "98%", l: "recovery rate" },
              { n: "14d", l: "to go live" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center", padding: "16px 8px" }}>
                <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 8, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sections3.Testimonials />

      {/* About — plain-language who/what/who-for/where for humans and crawlers */}
      <section className="cc-section" id="about" style={{ paddingTop: 8, paddingBottom: 8 }}>
        <div className="cc-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "0.8fr 1.2fr",
            gap: window.innerWidth < 900 ? 24 : 64,
            alignItems: "start",
            padding: window.innerWidth < 900 ? "8px 0" : "16px 0",
          }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>ABOUT CLEANERCLICKS</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
                The marketing team your trade business never had to hire.
              </h2>
            </div>
            <div className="cc-stack-sm" style={{ fontSize: 17, lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "hsl(var(--foreground))" }}>CleanerClicks builds high-converting websites and lead-capture &amp; follow-up automation for service businesses</strong> — cleaning, pressure washing, landscaping, HVAC, roofing, plumbing, electrical, and the trades alongside them.
              </p>
              <p style={{ margin: 0 }}>
                We design, build, and host the site, then wire it to automation that catches every lead and replies in under a minute — so a missed call turns into a booked job instead of a voicemail. It's built for local service owners, usually 1–10 person shops, who want more booked work without standing up a marketing department.
              </p>
              <p style={{ margin: 0 }}>
                Based in <strong style={{ color: "hsl(var(--foreground))" }}>Fargo, North Dakota</strong>, serving service businesses across the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
