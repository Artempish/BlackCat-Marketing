"use client";
import React from "react";
const { useState, useEffect, useRef } = React;
import { Icon } from "@/components/icons";

// ===== Hero =====
function Hero() {
  const [city, setCity] = useState("");

  return (
    <section className="cc-hero cc-hero--sky" id="top">
      <div className="cc-hero-sky" aria-hidden="true">
        <span className="cc-hero-sky__sun" />
        <span className="cc-hero-sky__cloud cc-hero-sky__cloud--1" />
        <span className="cc-hero-sky__cloud cc-hero-sky__cloud--2" />
        <span className="cc-hero-sky__cloud cc-hero-sky__cloud--3" />
      </div>
      <div className="cc-container cc-hero__center">
        <div className="cc-hivis">
          <Icon.hardHat size={14} stroke={2} />
          Construction companies only
        </div>

        <h1 className="cc-h1">
          Own the{" "}
          <span style={{ position: "relative", whiteSpace: "nowrap" }}>
            <span style={{ position: "relative", zIndex: 1 }}>top 3</span>
            <svg style={{ position: "absolute", left: -4, right: -4, bottom: -6, width: "calc(100% + 8px)", height: 14, zIndex: 0 }} viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 10 C 60 2, 160 2, 218 8" stroke="hsl(var(--accent))" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          in your city in 90 days.
        </h1>

        <p className="cc-lede" style={{ maxWidth: 580 }}>
          Google LSA ads, a site built to close estimates, and a Google Business Profile
          engineered to rank. We only work with contractors — so we already know your market.
        </p>

        <form
          className="cc-hero__form"
          onSubmit={(e) => {
            e.preventDefault();
            // Carry the city through so the call is already useful before it starts
            const q = city.trim() ? `?city=${encodeURIComponent(city.trim())}` : "";
            window.location.href = `/book-a-call${q}`;
          }}
        >
          <span className="cc-hero__form-prefix" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Icon.mapPin size={15} />
          </span>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Your city (e.g. Dallas, TX)"
            aria-label="Your city"
          />
          <button type="submit" className="cc-btn">
            Check my ranking <Icon.arrowUpRight size={14} />
          </button>
        </form>

        <div className="cc-hero__tags">
          <span>LSA ads</span>
          <span>Website &amp; SEO</span>
          <span>GMB optimization</span>
        </div>
      </div>

      {/* Product phone rising halfway up out of the bottom of the hero */}
      <div className="cc-hero__phone-stage">
        <HeroPhone />
      </div>
    </section>
  );
}

// Phone showing Google Local Services leads landing one after another.
function HeroPhone() {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(`${d.getHours() % 12 || 12}:${String(d.getMinutes()).padStart(2, "0")}`);
    };
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 2200);
    return () => clearInterval(t);
  }, []);

  // "Exclusive" lives in the detail line rather than a trailing badge — at the
  // phone mock's width a third column truncates the job title to nothing.
  const leads = [
    { job: "Kitchen remodel", detail: "Exclusive · Plano, TX" },
    { job: "Roof replacement", detail: "Exclusive · Frisco, TX" },
    { job: "Home addition", detail: "Exclusive · Allen, TX" },
  ];

  return (
    <div style={{ position: "relative" }}>
      <div className="cc-phone">
        <div className="cc-phone__screen">
          <div className="cc-phone__notch" />
          <div className="cc-phone__statusbar">
            <span>{time || "9:41"}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ display: "inline-block", width: 14, height: 9, border: "1.5px solid currentColor", borderRadius: 2, position: "relative" }}>
                <span style={{ position: "absolute", inset: 1, background: "currentColor", borderRadius: 1 }} />
              </span>
            </span>
          </div>

          <div style={{ flex: 1, padding: "16px 14px", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: 10,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "hsl(var(--muted-foreground))", padding: "2px 2px 6px",
            }}>
              <Icon.google size={12} /> Local Services · Today
            </div>

            {leads.map((l, i) =>
              step >= i + 1 ? (
                <div
                  key={`${l.job}-${step}`}
                  className="cc-fade-up"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 12px",
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 12,
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))",
                    display: "grid", placeItems: "center", flexShrink: 0,
                  }}>
                    <Icon.phone size={13} stroke={2.2} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 12.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{l.job}</div>
                    <div style={{
                      fontSize: 10, color: "hsl(142 71% 42%)",
                      fontFamily: "var(--font-mono)", letterSpacing: "0.03em",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      marginTop: 1,
                    }}>{l.detail}</div>
                  </div>
                </div>
              ) : null,
            )}

            {step === 0 && (
              <div style={{
                flex: 1, display: "grid", placeItems: "center",
                textAlign: "center", color: "hsl(var(--muted-foreground))", fontSize: 12,
              }}>
                Waiting for leads…
              </div>
            )}
          </div>

          <div style={{ padding: "10px 14px 18px", borderTop: "1px solid hsl(var(--border))", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, padding: "8px 12px", background: "hsl(var(--muted))", borderRadius: 999, fontSize: 11, color: "hsl(var(--muted-foreground))" }}>
              {step === 0 ? "Campaign live" : `${step} lead${step === 1 ? "" : "s"} today`}
            </div>
            <span style={{ width: 28, height: 28, borderRadius: "50%", background: "hsl(var(--accent))", color: "hsl(30 8% 8%)", display: "grid", placeItems: "center" }}>
              <Icon.bolt size={13} stroke={2.4} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== Trades trust strip =====
function Trades() {
  const trades = [
    { name: "General contracting", icon: <Icon.hardHat size={14} /> },
    { name: "Roofing", icon: <Icon.shield size={14} /> },
    { name: "Concrete", icon: <Icon.layers size={14} /> },
    { name: "Remodeling", icon: <Icon.ruler size={14} /> },
    { name: "Additions", icon: <Icon.building size={14} /> },
    { name: "Decks & fencing", icon: <Icon.blueprint size={14} /> },
    { name: "Custom homes", icon: <Icon.star size={14} /> },
  ];
  return (
    <div className="cc-section--card" style={{ padding: "26px clamp(20px, 4vw, 64px)" }}>
      <div className="cc-container">
        <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
          <div className="cc-eyebrow cc-eyebrow--muted">BUILT FOR THE TRADES THAT BUILD</div>
        </div>
        <div className="cc-trades">
          {trades.map((t) => (
            <span key={t.name} className="cc-trade">{t.icon}{t.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Sections1 = { Hero, Trades };
