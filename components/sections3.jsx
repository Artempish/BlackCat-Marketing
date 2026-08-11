"use client";
import React from "react";
import { Icon } from "@/components/icons";
const { useState: useState3, useEffect: useEffect3, useRef: useRef3 } = React;

// ===== Live Demo — a homeowner searching, finding you, and calling =====
function LiveDemo() {
  const [step, setStep] = useState3(0); // 0 idle, 1 typing, 2 results, 3 tapping, 4 ringing, 5 connected, 6 booked
  const [playing, setPlaying] = useState3(false);

  const reset = () => { setStep(0); setPlaying(false); };
  const play = () => { setStep(0); setPlaying(true); };

  useEffect3(() => {
    if (!playing) return;
    const timings = [900, 1400, 1500, 900, 1400, 1400];
    if (step < 6) {
      const t = setTimeout(() => setStep(step + 1), timings[step] || 1200);
      return () => clearTimeout(t);
    }
    setPlaying(false);
  }, [step, playing]);

  return (
    <section className="cc-section cc-section--card" id="live-demo" style={{ scrollMarginTop: 80 }}>
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
              Press play. Watch a homeowner find you first.
            </h2>
            <p className="cc-lede">
              This is what happens when your Local Services Ad sits above the map pack. The
              homeowner never scrolls to your competitors — because they never need to.
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
    { at: 1, label: "Homeowner searches" },
    { at: 2, label: "You're the first result" },
    { at: 4, label: "They tap to call you" },
    { at: 6, label: "Estimate booked" },
  ];
  return (
    <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
      {items.map((it, i) => {
        const done = step >= (items[i + 1]?.at ?? 7);
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
              borderColor: done || active ? "hsl(var(--accent))" : "hsl(var(--border-strong))",
              background: done ? "hsl(var(--accent))" : "transparent",
              color: "hsl(30 8% 8%)",
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
  const query = "general contractor near me";
  const typed = step >= 2 ? query : step === 1 ? query.slice(0, 14) : "";

  return (
    <div className="cc-phone" style={{ maxWidth: 320 }}>
      <div className="cc-phone__screen">
        <div className="cc-phone__notch" />
        <div className="cc-phone__statusbar">
          <span>9:41</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "hsl(var(--muted-foreground))" }}>Google</span>
        </div>

        {step === 0 && (
          <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 24, textAlign: "center" }}>
            <div>
              <div style={{ width: 60, height: 60, margin: "0 auto 16px", borderRadius: "50%", background: "hsl(var(--muted))", display: "grid", placeItems: "center" }}>
                <Icon.search size={24} stroke={1.8} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>A homeowner opens Google…</div>
              <div style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", marginTop: 4 }}>Press play to start</div>
            </div>
          </div>
        )}

        {step >= 1 && step < 4 && (
          <div style={{ flex: 1, padding: "14px 14px", display: "flex", flexDirection: "column", gap: 10, overflow: "hidden" }}>
            {/* search bar */}
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "9px 13px",
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 999,
              fontSize: 12,
            }}>
              <Icon.search size={13} style={{ color: "hsl(var(--muted-foreground))", flexShrink: 0 }} />
              <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{typed}</span>
              {step === 1 && <span style={{ width: 1.5, height: 13, background: "hsl(var(--accent))", animation: "cc-caret 1s steps(1) infinite" }} />}
            </div>

            {step >= 2 && (
              <>
                <div className="cc-fade-up" style={{
                  fontFamily: "var(--font-mono)", fontSize: 9,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "hsl(var(--muted-foreground))", padding: "2px 4px",
                }}>
                  Local Services Ads
                </div>

                {/* your LSA listing — first, badged */}
                <div
                  className="cc-fade-up"
                  style={{
                    padding: 13,
                    background: "hsl(var(--accent-soft))",
                    border: `1px solid hsl(var(--accent) / ${step >= 3 ? 0.9 : 0.45})`,
                    borderRadius: 12,
                    transform: step >= 3 ? "scale(0.97)" : "none",
                    transition: "all 0.2s var(--ease-default)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: "hsl(var(--accent))", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon.badge size={14} stroke={2} />
                    </span>
                    <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", textTransform: "uppercase", color: "hsl(var(--accent))", fontWeight: 600 }}>
                      Google Guaranteed
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>Your Construction Co.</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                    <span style={{ display: "flex", gap: 1, color: "#f59e0b" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon.star key={i} size={9} stroke={0} style={{ fill: "currentColor" }} />
                      ))}
                    </span>
                    <span style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-mono)" }}>4.9 · 184</span>
                  </div>
                  <div style={{
                    marginTop: 10, padding: "7px 12px",
                    background: "hsl(var(--accent))", color: "hsl(30 8% 8%)",
                    borderRadius: 999, fontSize: 11, fontWeight: 700,
                    textAlign: "center",
                  }}>
                    Call now
                  </div>
                </div>

                {/* the competitors, below the fold */}
                {[
                  { n: "Ridgeline Builders", r: "4.7 · 96" },
                  { n: "Cornerstone Contracting", r: "4.6 · 71" },
                ].map((c, i) => (
                  <div key={c.n} className="cc-fade-up" style={{
                    padding: "10px 13px",
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 12,
                    opacity: 0.55,
                    animationDelay: `${0.1 + i * 0.08}s`,
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{c.n}</div>
                    <div style={{ fontSize: 10, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-mono)", marginTop: 2 }}>{c.r}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {step >= 4 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "20px 16px", gap: 12 }}>
            {step === 4 && (
              <div className="cc-fade-up" style={{ flex: 1, display: "grid", placeItems: "center", textAlign: "center" }}>
                <div>
                  <div className="cc-pulse-ring" style={{ width: 80, height: 80, margin: "0 auto 18px", borderRadius: "50%", background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))", display: "grid", placeItems: "center" }}>
                    <Icon.phone size={30} stroke={1.8} />
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 17 }}>Incoming call</div>
                  <div style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                    via Google Local Services
                  </div>
                </div>
              </div>
            )}

            {step >= 5 && (
              <>
                <div className="cc-fade-up" style={{
                  padding: 14,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 12,
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 8 }}>
                    Lead detail
                  </div>
                  {[
                    ["Job", "Home addition"],
                    ["Area", "600 sq ft, single story"],
                    ["Timeline", "Wants to start in spring"],
                    ["Type", "Exclusive — not shared"],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: "4px 0", fontSize: 11.5 }}>
                      <span style={{ color: "hsl(var(--muted-foreground))" }}>{k}</span>
                      <span style={{ fontWeight: 600, textAlign: "right" }}>{v}</span>
                    </div>
                  ))}
                </div>

                {step >= 6 && (
                  <div className="cc-fade-up" style={{
                    marginTop: "auto",
                    padding: 12,
                    background: "hsl(142 60% 12%)",
                    color: "hsl(142 70% 78%)",
                    borderRadius: 10,
                    fontSize: 12,
                    display: "flex", alignItems: "center", gap: 8,
                    border: "1px solid hsl(142 40% 26%)",
                  }}>
                    <Icon.check size={14} stroke={2.4} />
                    <span><strong>Estimate booked — Thu 9:00am.</strong> Lead #4 this month.</span>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ===== Testimonials =====
// ⚠️ PLACEHOLDER CONTENT — these are illustrative, not real clients.
// Replace every entry with a real, permissioned client quote before launch.
// See README → "Replace before you go live".
const TESTIMONIALS = [
  { t: "We were on page two for every search that mattered. Ninety days later we're in the map pack, and the phone rings with people who already trust us.", n: "Placeholder Client", r: "Owner, [Company] · [City, ST]" },
  { t: "The LSA leads are a different animal. They've already seen the Google Guaranteed badge, so the call starts at 'when can you come out' instead of 'what do you charge'.", n: "Placeholder Client", r: "Owner, [Company] · [City, ST]" },
  { t: "First agency I've worked with that didn't need me to explain what a change order is. They knew the trade before day one.", n: "Placeholder Client", r: "GM, [Company] · [City, ST]" },
  { t: "The report actually tells me my cost per booked estimate. Nobody I hired before could answer that question.", n: "Placeholder Client", r: "Owner, [Company] · [City, ST]" },
];

function Testimonials() {
  return (
    <section className="cc-section cc-section--card">
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 2fr", gap: 48, alignItems: "start" }}>
          <div className="cc-stack-md">
            <div className="cc-eyebrow cc-eyebrow--muted">CONTRACTORS</div>
            <h2 className="cc-h2">Built for the people who build.</h2>
            <p className="cc-lede">
              General contractors, roofers, concrete crews, remodelers, framers, deck builders,
              custom home builders. Companies whose next quarter depends on the estimates they
              get booked this month.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 8, flexWrap: "wrap" }}>
              <Stat n="Top 3" l="in 90 days" />
              <Stat n="5 leads" l="in 30 days" />
              <Stat n="1" l="industry served" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "1fr 1fr", gap: 16 }}>
            {TESTIMONIALS.map((q, i) => (
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

// ===== The two guarantees, side by side =====
function Guarantees() {
  return (
    <section className="cc-section cc-section--card" id="offer">
      <div className="cc-container">
        <div className="cc-offer">
          <div style={{ position: "absolute", inset: 0, opacity: 0.07, backgroundImage: "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="cc-offer__badge">
              <Icon.badge size={12} />
              WE PUT IT IN WRITING
            </span>
            <h2 className="cc-h2" style={{ marginTop: 20 }}>
              Two promises,<br />and what happens if we miss.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.72, maxWidth: 480, marginTop: 16 }}>
              Most agencies sell effort. We'd rather be measured on the two numbers you'd
              actually judge us by — where you rank, and how many leads you got.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <a href="/guarantee" className="cc-btn cc-btn--blue cc-btn--lg">Read the guarantees <Icon.arrowUpRight size={14} /></a>
              <a href="/pricing" className="cc-btn cc-btn--ghost cc-btn--lg" style={{ background: "transparent", color: "inherit", borderColor: "currentColor", opacity: 0.75 }}>See pricing</a>
            </div>
          </div>

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                icon: <Icon.target size={18} />,
                head: "Top 3 in 90 days",
                body: "Map pack, for your agreed target keywords and service area — inside 90 days of your Google Business Profile going live.",
              },
              {
                icon: <Icon.phone size={18} />,
                head: "5 LSA leads in 30 days",
                body: "If your first 30 days of live LSA campaigns don't produce 5 leads, we cover your LSA ad spend until you get there.",
              },
            ].map((g) => (
              <div key={g.head} style={{
                background: "hsla(0,0%,50%,0.10)",
                border: "1px solid hsla(0,0%,50%,0.22)",
                borderRadius: 16,
                padding: 24,
                backdropFilter: "blur(20px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: "hsla(0,0%,50%,0.16)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {g.icon}
                  </span>
                  <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>{g.head}</span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: 0.72 }}>{g.body}</p>
              </div>
            ))}
            <p style={{ margin: 0, fontSize: 12, opacity: 0.5, lineHeight: 1.5 }}>
              Both guarantees carry conditions — see the <a href="/guarantee" style={{ textDecoration: "underline" }}>full terms</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ (compact, used on the home page) =====
function FAQ() {
  const items = [
    { q: "What exactly does the $5,000/month cover?", a: "Website design, build and hosting; full local SEO; and complete Google Business Profile management. One monthly fee, no setup charge, no per-page or per-keyword upcharges." },
    { q: "How does LSA pricing work?", a: "$500/month for management, plus your ad spend. We run to a $50/day ceiling — about $1,500/month — which is what most contractors need to hit our lead target. If you want more volume, you can raise the daily budget any time; the management fee doesn't change." },
    { q: "What if I don't rank top 3 in 90 days?", a: "We keep working the campaign at no additional charge until you do. The full conditions are on the guarantee page — the short version is that it applies to the target keywords and service area we agree on up front." },
    { q: "What if the LSA ads don't produce 5 leads in 30 days?", a: "We pay for your LSA ad spend until you hit 5 leads. You keep the leads. Conditions apply — mainly that your profile stays verified, the budget stays at the agreed level, and you answer the calls." },
    { q: "Why only construction?", a: "Because the keyword research, the Google Guaranteed verification process, the seasonality, and the buying cycle are all specific to the trade. Specialists beat generalists, and we'd rather be the specialist." },
    { q: "Do I have to sign a long contract?", a: "No. Both plans are month-to-month. The 90-day guarantee assumes you stay through the 90 days, since that's how long the work takes to compound." },
  ];
  const [open, setOpen] = useState3(0);
  return (
    <section className="cc-section cc-section--card" id="faq">
      <div className="cc-container">
        <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1.6fr", gap: 64, alignItems: "start" }}>
          <div>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>FAQ</div>
            <h2 className="cc-h2">Questions, answered.</h2>
            <p className="cc-lede" style={{ marginTop: 16 }}>
              More on the <a href="/faq" className="cc-link" style={{ display: "inline-flex" }}>full FAQ →</a>
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

export const Sections3 = { LiveDemo, Testimonials, Guarantees, FAQ };
