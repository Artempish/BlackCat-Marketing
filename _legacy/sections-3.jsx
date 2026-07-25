/* global React, Icon */
const { useState: useState3, useEffect: useEffect3, useRef: useRef3 } = React;

// ===== Live Demo — interactive missed-call → text-back simulator =====
function LiveDemo() {
  const [step, setStep] = useState3(0); // 0 idle, 1 ringing, 2 missed, 3 typing, 4 sent, 5 reply, 6 booked
  const [playing, setPlaying] = useState3(false);

  const reset = () => { setStep(0); setPlaying(false); };
  const play = () => {
    setStep(0);
    setPlaying(true);
  };

  useEffect3(() => {
    if (!playing) return;
    const timings = [900, 1400, 1100, 1100, 1500, 1400];
    if (step < 6) {
      const t = setTimeout(() => setStep(step + 1), timings[step] || 1200);
      return () => clearTimeout(t);
    } else {
      setPlaying(false);
    }
  }, [step, playing]);

  return (
    <section className="cc-section" id="live-demo" style={{ paddingTop: 0, scrollMarginTop: 80 }}>
      <div className="cc-container">
        <div style={{
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: 24,
          overflow: "hidden",
          padding: 0,
          display: "grid",
          gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1fr",
        }}>
          {/* Left copy */}
          <div style={{ padding: window.innerWidth < 900 ? 32 : 56, display: "flex", flexDirection: "column", gap: 20, justifyContent: "center" }}>
            <div className="cc-eyebrow">
              <span className="cc-live-dot" />
              TRY IT LIVE · NO SIGN-UP
            </div>
            <h2 className="cc-h2" style={{ fontSize: "clamp(28px, 3vw, 40px)" }}>
              Press play. Watch a missed call become a booked job.
            </h2>
            <p className="cc-lede">
              This is roughly what your customer sees the second the system kicks in. The whole sequence — from missed call to confirmed appointment — runs in under 90 seconds in production.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button className="cc-btn" onClick={play} disabled={playing}>
                {playing ? <><span className="cc-spinner" /> Playing…</> : <><Icon.play size={12} /> Run the demo</>}
              </button>
              <button className="cc-btn cc-btn--ghost" onClick={reset}>
                <Icon.refresh size={14} /> Reset
              </button>
            </div>
            <DemoTimeline step={step} />
          </div>

          {/* Right phone */}
          <div style={{
            background: "hsl(var(--page))",
            borderLeft: window.innerWidth < 900 ? "none" : "1px solid hsl(var(--border))",
            borderTop: window.innerWidth < 900 ? "1px solid hsl(var(--border))" : "none",
            padding: 32, display: "grid", placeItems: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div className="cc-grid-bg" style={{ opacity: 0.6 }} />
            <DemoPhone step={step} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoTimeline({ step }) {
  const items = [
    { at: 0, label: "Call comes in" },
    { at: 2, label: "Missed → text fires" },
    { at: 4, label: "Customer replies" },
    { at: 6, label: "Job booked" },
  ];
  return (
    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
      {items.map((it, i) => {
        const done = step >= it.at + 1;
        const active = step >= it.at && step < (items[i + 1]?.at ?? 99);
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "8px 0",
            color: done || active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
            transition: "color 0.3s",
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: "50%",
              border: "1.5px solid",
              borderColor: done ? "hsl(var(--accent))" : active ? "hsl(var(--accent))" : "hsl(var(--border-strong))",
              background: done ? "hsl(var(--accent))" : "transparent",
              color: "white",
              display: "grid", placeItems: "center",
              flexShrink: 0,
              transition: "all 0.3s",
            }}>
              {done && <Icon.check size={11} stroke={3} />}
            </span>
            <span style={{ fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>
              {it.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function DemoPhone({ step }) {
  return (
    <div className="cc-phone" style={{ maxWidth: 320 }}>
      <div className="cc-phone__screen">
        <div className="cc-phone__notch" />
        <div className="cc-phone__statusbar">
          <span>9:41</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "hsl(var(--muted-foreground))" }}>CleanerClicks</span>
        </div>

        {step === 0 && (
          <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
            <div>
              <div style={{ width: 60, height: 60, margin: "0 auto 16px", borderRadius: "50%", background: "hsl(var(--muted))", display: "grid", placeItems: "center" }}>
                <Icon.phone size={24} stroke={1.8} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Waiting for a call…</div>
              <div style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", marginTop: 4 }}>Press play to start</div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 24, textAlign: "center" }} className="cc-fade-up">
            <div>
              <div style={{ width: 80, height: 80, margin: "0 auto 18px", borderRadius: "50%", background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))", display: "grid", placeItems: "center" }} className="cc-pulse-ring">
                <Icon.phone size={30} stroke={1.8} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 17 }}>Incoming…</div>
              <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 4, fontFamily: "var(--font-mono)" }}>(555) 218-4567</div>
            </div>
          </div>
        )}

        {step >= 2 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 14px", gap: 8, overflow: "hidden" }}>
            <div className="cc-fade-up" style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px",
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 12,
            }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#fee2e2", color: "#dc2626", display: "grid", placeItems: "center" }}>
                <Icon.phoneMissed size={14} stroke={2.2} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13 }}>Missed call</div>
                <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))" }}>(555) 218-4567 · just now</div>
              </div>
            </div>

            {step === 3 && (
              <div className="cc-fade-up" style={{
                alignSelf: "flex-end",
                padding: "10px 14px",
                background: "hsl(var(--accent))",
                color: "white",
                borderRadius: 18,
                borderBottomRightRadius: 4,
                fontSize: 12.5,
                display: "flex", gap: 4,
              }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "white", animation: "cc-fade-up 0.8s infinite" }} />
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "white", animation: "cc-fade-up 0.8s 0.2s infinite" }} />
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "white", animation: "cc-fade-up 0.8s 0.4s infinite" }} />
              </div>
            )}

            {step >= 4 && (
              <div className="cc-sms__bubble cc-sms__bubble--out cc-fade-up">
                Hey, this is Tony at Oakridge HVAC — sorry we missed you. What's going on?
              </div>
            )}
            {step >= 5 && (
              <div className="cc-sms__bubble cc-sms__bubble--in cc-fade-up">
                AC stopped overnight. Any chance someone can come today?
              </div>
            )}
            {step >= 6 && (
              <div className="cc-sms__bubble cc-sms__bubble--out cc-fade-up" style={{ background: "hsl(142 71% 40%)" }}>
                Got you on the calendar for 2pm. Confirm here → oakridge.co/c/9k4
              </div>
            )}
            {step >= 6 && (
              <div className="cc-fade-up" style={{
                marginTop: "auto",
                padding: 10,
                background: "hsl(142 71% 96%)",
                color: "hsl(142 60% 25%)",
                borderRadius: 10,
                fontSize: 12,
                display: "flex", alignItems: "center", gap: 8,
                border: "1px solid hsl(142 50% 80%)",
              }}>
                <Icon.check size={14} stroke={2.4} />
                <span><strong>Booked — 2:00pm today.</strong> Calendar synced.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ===== Testimonials =====
function Testimonials() {
  const quotes = [
    { t: "We stopped missing calls and started booking more jobs immediately. The text-back alone paid for the whole system in the first week.", n: "Jared M.", r: "Owner, Apex Roofing · Austin TX" },
    { t: "Our reviews went from inconsistent to steady 5-stars every week. Our local Google rank moved from page 2 to spot #3.", n: "Sandra L.", r: "Office Manager, BlueLine Plumbing" },
    { t: "The follow-up alone paid for everything. People I'd given up on six months ago started booking again.", n: "Carlos R.", r: "Owner, Northwind HVAC · Phoenix" },
    { t: "Honestly didn't think automating this stuff would feel personal. It does. Customers reply like they're talking to me.", n: "Megan K.", r: "Owner, GreenStep Landscaping" },
  ];
  return (
    <section className="cc-section cc-section--band">
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 2fr", gap: 48, alignItems: "start" }}>
          <div className="cc-stack-md">
            <div className="cc-eyebrow cc-eyebrow--muted">CUSTOMERS</div>
            <h2 className="cc-h2">Built for the people who actually do the work.</h2>
            <p className="cc-lede">
              Roofers, HVAC techs, plumbers, electricians, cleaners, landscapers, pest pros. Local shops with crews on the road and no time to chase leads.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 8, flexWrap: "wrap" }}>
              <Stat n="2.4×" l="more booked jobs" />
              <Stat n="47s" l="avg reply time" />
              <Stat n="98%" l="recovery rate" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "1fr 1fr", gap: 16 }}>
            {quotes.map((q, i) => (
              <div key={i} className="cc-quote">
                <div className="cc-quote__text">"{q.t}"</div>
                <div className="cc-quote__person">
                  <div className="cc-quote__avatar">{q.n[0]}</div>
                  <div>
                    <div className="cc-quote__name">{q.n}</div>
                    <div className="cc-quote__role">{q.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 4, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{l}</div>
    </div>
  );
}

// ===== Pricing / Offer =====
function Offer() {
  return (
    <section className="cc-section" id="offer">
      <div className="cc-container">
        <div className="cc-offer">
          <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="cc-offer__badge">
              <Icon.sparkles size={12} />
              FREE WEBSITE INCLUDED
            </span>
            <h2 className="cc-h2" style={{ marginTop: 20, color: "white" }}>
              One system. One price. <br />
              Built for one job: more booked jobs.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "hsla(0,0%,100%,0.7)", maxWidth: 480, marginTop: 16 }}>
              When you run CleanerClicks, your high-converting website is included — designed, built, and hosted by us, free for as long as you're a customer.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <button className="cc-btn cc-btn--blue cc-btn--lg">Book a 20-min call <Icon.arrowUpRight size={14} /></button>
              <button className="cc-btn cc-btn--ghost cc-btn--lg" style={{ background: "transparent", color: "white", borderColor: "hsla(0,0%,100%,0.2)" }}>See live examples</button>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              background: "hsla(0,0%,100%,0.05)",
              border: "1px solid hsla(0,0%,100%,0.12)",
              borderRadius: 16,
              padding: 28,
              backdropFilter: "blur(20px)",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsla(0,0%,100%,0.6)", marginBottom: 16 }}>
                WHAT'S INCLUDED
              </div>
              <div className="cc-stack-sm">
                {[
                  "Missed-call text-back",
                  "1-year automated follow-up",
                  "High-converting website",
                  "5-star review engine",
                  "Smart lead capture forms",
                  "Inbox · call · text in one place",
                  "Done-for-you setup in 14 days",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "6px 0", fontSize: 15, color: "hsla(0,0%,100%,0.92)" }}>
                    <span style={{ width: 20, height: 20, borderRadius: "50%", background: "hsla(0,0%,100%,0.1)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon.check size={11} stroke={2.6} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ =====
function FAQ() {
  const items = [
    { q: "How fast does the missed-call text-back actually fire?", a: "Sub-second from our system. Your customer sees it in 5–10 seconds depending on their carrier. Fastest we measure end-to-end is around 47 seconds from missed call to first reply back." },
    { q: "Will it sound like a robot?", a: "No. We write the templates in your voice with your name, your shop's tone, and the specific question they reached out about. Customers regularly think they're texting you directly." },
    { q: "Does this replace my CRM?", a: "It can, but it doesn't have to. We plug into Jobber, ServiceTitan, Housecall Pro, HubSpot, and most home-service stacks. If you've got nothing yet, our inbox covers calls, texts, email, and forms." },
    { q: "What if a lead says something the system can't handle?", a: "It pauses and pings you. You take over from your phone. Most owners step in maybe twice a week — everything else handles itself." },
    { q: "How does the free website work?", a: "When you're an active CleanerClicks customer, your site is included — design, build, hosting, content updates, the lot. Cancel and you can take the site with you (one-time export fee)." },
    { q: "How long does setup take?", a: "Two weeks from signed agreement to live. We handle copy, design, integrations, number porting, and training. You give us 90 minutes total." },
  ];
  const [open, setOpen] = useState3(0);
  return (
    <section className="cc-section" id="faq">
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>FAQ</div>
            <h2 className="cc-h2">Questions, answered.</h2>
            <p className="cc-lede" style={{ marginTop: 16 }}>
              Still curious? <a href="#offer" className="cc-link" style={{ display: "inline-flex" }}>Book a 20-min call →</a>
            </p>
          </div>
          <div>
            {items.map((it, i) => (
              <div key={i} className="cc-faq__item" data-open={open === i}>
                <button className="cc-faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <span className="cc-faq__icon"><Icon.plus size={12} stroke={2.4} /></span>
                </button>
                <div className="cc-faq__a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Final CTA =====
function FinalCTA() {
  return (
    <section className="cc-section" style={{ padding: "64px 0 96px" }}>
      <div className="cc-container">
        <div style={{
          padding: "80px 32px",
          textAlign: "center",
          background: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
          borderRadius: 24,
          position: "relative",
          overflow: "hidden",
        }}>
          <div className="cc-grid-bg" />
          <div style={{ position: "relative" }}>
            <div className="cc-eyebrow" style={{ marginBottom: 16 }}>READY WHEN YOU ARE</div>
            <h2 className="cc-h2" style={{ maxWidth: 720, margin: "0 auto" }}>
              Stop losing jobs to voicemail.
            </h2>
            <p className="cc-lede" style={{ margin: "16px auto 32px" }}>
              20-minute call, no slideshow, no pressure. We'll show you what you'd recover from missed calls alone.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="cc-btn cc-btn--lg">Get more booked jobs <Icon.arrowUpRight size={14} /></button>
              <button className="cc-btn cc-btn--ghost cc-btn--lg">See pricing</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== Footer =====
function Footer() {
  const cols = [
    { h: "Product", links: ["Missed Call Text Back", "Follow-Up System", "Websites", "Reviews", "Forms", "Integrations"] },
    { h: "Industries", links: ["Roofing", "HVAC", "Plumbing", "Electrical", "Cleaning", "Pest control"] },
    { h: "Company", links: ["About", "Work", "Blog", "Careers", "Contact"] },
  ];
  return (
    <footer className="cc-footer">
      <div className="cc-container">
        <div className="cc-footer__grid">
          <div>
            <div className="cc-nav__brand" style={{ marginBottom: 16 }}>
              <span className="cc-logo">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8a5 5 0 0 1 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="11.5" cy="11.5" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <span>CleanerClicks</span>
            </div>
            <p style={{ fontSize: 14, color: "hsl(var(--muted-foreground))", lineHeight: 1.6, maxWidth: 280, margin: 0 }}>
              The lead-capture and follow-up system for home-service businesses. More calls, more replies, more booked jobs.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h} className="cc-footer__col">
              <h5>{c.h}</h5>
              {c.links.map((l) => <a key={l} href="#">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="cc-footer__bottom">
          <span>© 2026 CleanerClicks Inc.</span>
          <span>v2.4 · BUILT IN AUSTIN, TX</span>
        </div>
      </div>
    </footer>
  );
}

window.Sections3 = { LiveDemo, Testimonials, Offer, FAQ, FinalCTA };
