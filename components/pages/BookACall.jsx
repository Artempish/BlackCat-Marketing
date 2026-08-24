"use client";
import React from "react";
import { Layout, CONTACT } from "@/components/shared";
import { Icon } from "@/components/icons";
const { useEffect: useEffectB, useState: useStateB } = React;

// ─────────────────────────────────────────────────────────────────────────
// BOOKING — set `calendlyUrl` to your Calendly event link and the page turns
// into a real self-serve booking widget. Leave it empty and it falls back to
// the read-only Google Calendar below, which shows availability but can't
// take a booking. Nothing else needs to change either way.
//
//   calendlyUrl: "https://calendly.com/blackcatmarketing"            (all your events)
//   calendlyUrl: "https://calendly.com/blackcatmarketing/20min"      (one event)
// ─────────────────────────────────────────────────────────────────────────
const BOOKING = {
  calendlyUrl: "https://calendly.com/blackcatmarketing",
  googleCalendarSrc: "artempishic88@gmail.com",
  timezone: "America/Chicago",
  timezoneLabel: "Central Time",
};

const usingCalendly = BOOKING.calendlyUrl.trim().length > 0;

function googleCalendarUrl() {
  const params = new URLSearchParams({
    src: BOOKING.googleCalendarSrc,
    ctz: BOOKING.timezone,
    mode: "WEEK",
    showTitle: "0",
    showPrint: "0",
    showTabs: "1",
    showCalendars: "0",
    showTz: "1",
  });
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

const EMBED_SHELL = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: 20,
  padding: 8,
  boxShadow: "var(--shadow-card)",
  overflow: "hidden",
};

// Calendly's inline widget: the div is the mount point, their script fills it.
function CalendlyEmbed() {
  useEffectB(() => {
    if (document.querySelector('script[data-calendly="true"]')) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.dataset.calendly = "true";
    document.body.appendChild(s);
  }, []);

  return (
    <div style={EMBED_SHELL}>
      <div
        className="calendly-inline-widget"
        data-url={`${BOOKING.calendlyUrl}?hide_gdpr_banner=1`}
        style={{ minWidth: 320, height: 700, borderRadius: 12, overflow: "hidden" }}
      />
    </div>
  );
}

function GoogleCalendarEmbed() {
  return (
    <div style={EMBED_SHELL}>
      <iframe
        src={googleCalendarUrl()}
        style={{ width: "100%", height: 600, border: 0, display: "block", borderRadius: 12, background: "#fff" }}
        frameBorder="0"
        scrolling="no"
        title="BlackCat Marketing availability"
      />
    </div>
  );
}

function BookACallPage() {
  const narrow = window.innerWidth < 900;
  const [city, setCity] = useStateB("");

  // The hero search box on the home page passes the visitor's city through.
  useEffectB(() => {
    const c = new URLSearchParams(window.location.search).get("city");
    if (c) setCity(c);
  }, []);

  return (
    <Layout active="book">
      <section className="cc-section cc-section--card cc-section--hero">
        <div className="cc-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: narrow ? "1fr" : "1fr 1.2fr",
            gap: 56,
            alignItems: "start",
          }}>
            {/* Left — value props + agenda */}
            <div className="cc-stack-lg">
              <div className="cc-eyebrow">
                <span className="cc-live-dot" />
                BOOK A 20-MIN CALL
              </div>
              <h1 className="cc-h1" style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>
                We'll show you exactly where you rank{" "}
                <span style={{ color: "hsl(var(--muted-foreground))" }}>— live, on the call.</span>
              </h1>
              <p className="cc-lede">
                20 minutes, video. We pull up your Google Business Profile, your three closest
                competitors, and the searches homeowners in your area are actually running. Then we
                tell you what we'd fix first. No slide deck, no pressure.
              </p>

              {city && (
                <div className="cc-hivis" style={{ alignSelf: "flex-start" }}>
                  <Icon.mapPin size={14} stroke={2} />
                  Checking {city}
                </div>
              )}

              <div
                style={{
                  padding: 24,
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 16,
                  marginTop: 8,
                  transition: "all 0.2s var(--ease-default)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}
              >
                <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>AGENDA</div>
                <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Pull up your Google Business Profile and audit it live",
                    "Compare you against the three companies in your map pack",
                    "Check whether LSA is live for your trade and service area",
                    "Tell you which plan to start with — and whether we'd guarantee your market",
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

              {/* What you get either way */}
              <div style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "20px 0",
                borderTop: "1px solid hsl(var(--border))",
                borderBottom: "1px solid hsl(var(--border))",
              }}>
                <span style={{
                  width: 40, height: 40, borderRadius: 11,
                  background: "hsl(var(--accent))", color: "hsl(30 10% 8%)",
                  display: "grid", placeItems: "center", flexShrink: 0,
                }}>
                  <Icon.badge size={19} stroke={2} />
                </span>
                <div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, fontWeight: 550, letterSpacing: "-0.005em", marginBottom: 4 }}>
                    If we don't think we can hit our guarantees in your market, we'll say so on this call.
                  </div>
                  <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>
                    You still leave with the audit.
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {[
                  { n: "20 min", l: "call length" },
                  { n: "Top 3", l: "in 90 days" },
                  { n: "$0", l: "for the audit" },
                ].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))", marginTop: 2, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — live availability calendar */}
            <div>
              {usingCalendly ? <CalendlyEmbed /> : <GoogleCalendarEmbed />}
              <div style={{
                marginTop: 12,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "hsl(var(--muted-foreground))",
              }}>
                <Icon.calendar size={11} />
                {usingCalendly ? "Secure booking · Calendly" : `Live availability · ${BOOKING.timezoneLabel}`}
              </div>
              {!usingCalendly && (
              <div style={{
                marginTop: 14,
                textAlign: "center",
                fontSize: 13.5,
                lineHeight: 1.6,
                color: "hsl(var(--muted-foreground))",
              }}>
                See an open slot that works? Call{" "}
                <a href={`tel:${CONTACT.phoneHref}`} style={{ color: "hsl(var(--foreground))", fontWeight: 550 }}>{CONTACT.phoneLabel}</a>{" "}
                or email{" "}
                <a href={`mailto:${CONTACT.email}`} style={{ color: "hsl(var(--foreground))", fontWeight: 550 }}>{CONTACT.email}</a>{" "}
                and we'll lock it in.
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default BookACallPage;
