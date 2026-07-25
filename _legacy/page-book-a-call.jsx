/* global React, ReactDOM, Shared, Icon */
const { Layout, CTABlock } = Shared;
const { useEffect: useEffectB, useRef: useRefB } = React;

// Embeds the CleanerClicks (GoHighLevel) booking widget.
// Mount the iframe and inject the form_embed.js loader once. The loader
// listens for postMessage events from the booking widget and auto-resizes
// the iframe's height to match its content.
function GHLBookingEmbed() {
  const containerRef = useRefB(null);
  useEffectB(() => {
    // Inject the form_embed.js script once per page load
    const existing = document.querySelector('script[data-ghl-embed="true"]');
    if (existing) return;
    const s = document.createElement("script");
    s.src = "https://api.cleanerclicks.com/js/form_embed.js";
    s.type = "text/javascript";
    s.async = true;
    s.dataset.ghlEmbed = "true";
    document.body.appendChild(s);
  }, []);

  return (
    <div ref={containerRef} style={{
      background: "hsl(var(--card))",
      border: "1px solid hsl(var(--border))",
      borderRadius: 20,
      padding: 8,
      boxShadow: "var(--shadow-card)",
      overflow: "hidden",
      minHeight: 720,
    }}>
      <iframe
        src="https://api.cleanerclicks.com/widget/booking/YOUR_BOOKING_WIDGET_ID"
        style={{ width: "100%", border: "none", overflow: "hidden", display: "block", minHeight: 700, borderRadius: 12 }}
        scrolling="no"
        id="YOUR_BOOKING_WIDGET_ID_1779227809855"
        title="Book a call with CleanerClicks"
      />
    </div>
  );
}

function BookACallPage() {
  return (
    <Layout active="book">
      <section className="cc-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="cc-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1.2fr",
            gap: 56,
            alignItems: "start",
          }}>
            {/* Left — value props + agenda + social proof */}
            <div className="cc-stack-lg">
              <div className="cc-eyebrow">
                <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "hsl(var(--accent))", marginRight: 8, verticalAlign: "middle" }} />
                BOOK A 20-MIN CALL
              </div>
              <h1 className="cc-h1" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
                We'll show you what you're <span style={{ color: "hsl(var(--muted-foreground))" }}>actually losing</span> to voicemail.
              </h1>
              <p className="cc-lede">
                20 minutes, video. We pull up your site, your call flow, and your local search position — then we tell you what we'd fix and what it'd recover. No pitch slides, no pressure. You walk away with a real number.
              </p>

              <div style={{
                padding: 24,
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 16,
                marginTop: 8,
              }}>
                <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>AGENDA</div>
                <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Look at your current site + lead flow",
                    "Calculate what you're missing from voicemail",
                    "Walk through a custom recovery plan",
                    "Answer your questions (no pitch)",
                  ].map((t, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, fontSize: 14.5 }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: "50%",
                        border: "1px solid hsl(var(--border-strong))",
                        display: "grid", placeItems: "center",
                        fontFamily: "var(--font-mono)", fontSize: 11,
                        color: "hsl(var(--muted-foreground))",
                        flexShrink: 0,
                      }}>{i + 1}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Mini testimonial */}
              <div style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "20px 0",
                borderTop: "1px solid hsl(var(--border))",
                borderBottom: "1px solid hsl(var(--border))",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "hsl(var(--muted))",
                  display: "grid", placeItems: "center",
                  fontWeight: 600, fontSize: 14,
                  color: "hsl(var(--subtle-foreground))",
                  flexShrink: 0,
                }}>J</div>
                <div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 500, letterSpacing: "-0.005em", marginBottom: 4 }}>
                    "Most actually-useful 20 minutes I've spent on my business this year. We signed up that afternoon."
                  </div>
                  <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>
                    Jared M. · Apex Roofing
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { n: "20 min", l: "average call" },
                  { n: "412", l: "shops on the system" },
                  { n: "4.9 ★", l: "from customers" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — live GHL booking calendar */}
            <div>
              <GHLBookingEmbed />
              <div style={{
                marginTop: 12,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "hsl(var(--muted-foreground))",
              }}>
                <Icon.shield size={11} />
                Secured booking · powered by CleanerClicks
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<BookACallPage />);
