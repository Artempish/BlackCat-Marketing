import { Icon } from "./icons";

// ===== Mocked UI illustrations that sit inside feature cards =====
// Small "chip cards" and UI-ish artifacts on a soft background. Each one
// illustrates a piece of what BlackCat actually delivers: LSA leads landing,
// map-pack rank climbing, a Google Business Profile, the site, the report.

function MockLsaLead() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 24 }}>
      <div className="cc-chip-card cc-fade-up" style={{ top: 36, left: 24, right: 24, animationDelay: "0.05s" }}>
        <div className="cc-chip-card__dot" style={{ background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))" }}>
          <Icon.google size={16} stroke={2} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="cc-chip-card__title">
            New LSA lead <span style={{ color: "hsl(var(--muted-foreground))", fontWeight: 400, marginLeft: 4 }}>· 12s ago</span>
          </div>
          <div className="cc-chip-card__meta">Kitchen remodel · full gut · budget stated</div>
        </div>
      </div>

      <div className="cc-chip-card cc-fade-up" style={{ top: 116, left: 48, right: 16, animationDelay: "0.35s" }}>
        <div className="cc-chip-card__dot" style={{ background: "hsl(var(--accent-soft))", color: "hsl(var(--accent))" }}>
          <Icon.phone size={16} stroke={2} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="cc-chip-card__title">
            Call connected <span style={{ color: "hsl(142 71% 45%)", fontWeight: 500, marginLeft: 4 }}>· 4m 12s</span>
          </div>
          <div className="cc-chip-card__meta">Charged as a lead · homeowner, not a tire-kicker</div>
        </div>
      </div>

      <div className="cc-chip-card cc-fade-up" style={{ top: 196, left: 24, right: 40, animationDelay: "0.7s" }}>
        <div className="cc-chip-card__dot" style={{ background: "#dcfce7", color: "#16a34a" }}>
          <Icon.calendar size={16} stroke={2} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="cc-chip-card__title">Estimate booked · Thu 9am</div>
          <div className="cc-chip-card__meta">Lead #4 this month</div>
        </div>
      </div>
    </div>
  );
}

function MockRank() {
  // Map-pack rank tracker: the client climbs into the top 3.
  const rows = [
    { p: 1, n: "Ridgeline Builders", d: "4.7 ★ · 96" },
    { p: 2, n: "Your company", d: "4.9 ★ · 184", you: true },
    { p: 3, n: "Cornerstone Contracting", d: "4.6 ★ · 71" },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em",
        textTransform: "uppercase", color: "hsl(var(--muted-foreground))", marginBottom: 6,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <Icon.mapPin size={12} /> "general contractor near me"
      </div>
      {rows.map((r, i) => (
        <div
          key={r.p}
          className={`cc-rank cc-fade-up${r.you ? " cc-rank--you" : ""}`}
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          <span className="cc-rank__pos">{r.p}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: r.you ? 650 : 500, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.n}</div>
            <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-mono)" }}>{r.d}</div>
          </div>
          {r.you && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 3,
              color: "hsl(142 71% 40%)", fontSize: 11, fontWeight: 600, fontFamily: "var(--font-mono)",
              flexShrink: 0,
            }}>
              <Icon.trending size={12} stroke={2.4} /> +9
            </span>
          )}
        </div>
      ))}
      <div style={{
        marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 10,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "hsl(var(--muted-foreground))", display: "flex", alignItems: "center", gap: 8,
      }}>
        <span className="cc-live-dot" /> Day 74 of 90
      </div>
    </div>
  );
}

function MockGmb() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 28, display: "grid", placeItems: "center" }}>
      <div style={{
        width: "100%", maxWidth: 300,
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 14,
        boxShadow: "var(--shadow-lift)",
        overflow: "hidden",
      }}>
        <div style={{ height: 68, background: "linear-gradient(120deg, hsl(var(--accent) / 0.28), hsl(var(--muted)))", position: "relative" }}>
          <span style={{
            position: "absolute", top: 10, right: 10,
            padding: "3px 8px", borderRadius: 999,
            background: "hsl(var(--card))", border: "1px solid hsl(var(--border))",
            fontFamily: "var(--font-mono)", fontSize: 9,
            letterSpacing: "0.08em", textTransform: "uppercase",
            color: "hsl(142 71% 38%)",
          }}>Verified</span>
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: "-0.02em" }}>Your Construction Co.</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
            <span style={{ display: "flex", gap: 1, color: "#f59e0b" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.star key={i} size={11} stroke={0} style={{ fill: "currentColor" }} />
              ))}
            </span>
            <span style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", fontFamily: "var(--font-mono)" }}>4.9 · 184 reviews</span>
          </div>
          <div style={{ fontSize: 11, color: "hsl(var(--muted-foreground))", marginTop: 8, lineHeight: 1.5 }}>
            General contractor · Open · Closes 5 PM
          </div>
          <div style={{ display: "flex", gap: 5, marginTop: 12, flexWrap: "wrap" }}>
            {["Kitchen remodel", "Additions", "Framing", "Decks", "+9"].map((t) => (
              <span key={t} style={{
                padding: "3px 8px", borderRadius: 999,
                background: "hsl(var(--muted))",
                fontSize: 9.5, color: "hsl(var(--subtle-foreground))",
                whiteSpace: "nowrap",
              }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4, marginTop: 12 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ aspectRatio: "1", background: "hsl(var(--muted))", borderRadius: 5 }} />
            ))}
          </div>
        </div>
      </div>
      <div className="cc-chip-card" style={{ position: "absolute", bottom: 22, right: 22, padding: "8px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600 }}>
          <span style={{
            width: 22, height: 22, borderRadius: 6,
            background: "hsl(142 71% 45%)", color: "white",
            display: "grid", placeItems: "center",
          }}>
            <Icon.trending size={12} stroke={2.4} />
          </span>
          +312% profile views
        </div>
      </div>
    </div>
  );
}

function MockWebsite() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 32, display: "grid", placeItems: "center" }}>
      <div style={{
        width: "100%", maxWidth: 320,
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 12,
        boxShadow: "var(--shadow-lift)",
        overflow: "hidden",
      }}>
        {/* fake browser chrome */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", borderBottom: "1px solid hsl(var(--border))", background: "hsl(var(--muted))" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(var(--border-strong))" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(var(--border-strong))" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(var(--border-strong))" }} />
          <span style={{
            marginLeft: 12, flex: 1, padding: "3px 10px",
            background: "hsl(var(--card))", borderRadius: 999,
            fontSize: 10, color: "hsl(var(--muted-foreground))",
            fontFamily: "var(--font-mono)",
          }}>yourconstruction.com</span>
        </div>
        {/* fake page */}
        <div style={{ padding: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 8 }}>
            Additions & whole-home remodels, done on schedule.
          </div>
          <div style={{ fontSize: 10.5, color: "hsl(var(--muted-foreground))", marginBottom: 12, lineHeight: 1.4 }}>
            Licensed & insured. 184 five-star reviews. Free on-site estimate.
          </div>
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            <div style={{ flex: 1, height: 26, background: "hsl(var(--accent))", borderRadius: 999, display: "grid", placeItems: "center", color: "hsl(30 8% 8%)", fontSize: 10, fontWeight: 700 }}>
              Get my estimate
            </div>
            <div style={{ height: 26, padding: "0 12px", background: "hsl(var(--muted))", borderRadius: 999, display: "grid", placeItems: "center", fontSize: 10, fontWeight: 500 }}>
              Call
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4 }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ aspectRatio: "1", background: "hsl(var(--muted))", borderRadius: 6 }} />
            ))}
          </div>
        </div>
      </div>
      <div className="cc-chip-card" style={{ position: "absolute", bottom: 26, right: 26, padding: "8px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600 }}>
          <span style={{
            width: 22, height: 22, borderRadius: 6,
            background: "hsl(142 71% 45%)", color: "white",
            display: "grid", placeItems: "center",
          }}>
            <Icon.gauge size={12} stroke={2.4} />
          </span>
          PageSpeed 98
        </div>
      </div>
    </div>
  );
}

function MockReport() {
  const bars = [
    { m: "M1", h: 26 },
    { m: "M2", h: 44 },
    { m: "M3", h: 61 },
    { m: "M4", h: 78 },
    { m: "M5", h: 92 },
    { m: "M6", h: 100 },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, padding: 28, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 14,
        padding: 20,
        boxShadow: "var(--shadow-card)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "hsl(var(--muted-foreground))", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Booked estimates
          </div>
          <div style={{ fontSize: 11, color: "hsl(142 71% 40%)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>▲ 6 months</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 96 }}>
          {bars.map((b, i) => (
            <div key={b.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div
                className="cc-fade-up"
                style={{
                  width: "100%",
                  height: `${b.h}%`,
                  borderRadius: "5px 5px 2px 2px",
                  background: i === bars.length - 1 ? "hsl(var(--accent))" : "hsl(var(--muted))",
                  border: `1px solid ${i === bars.length - 1 ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                  animationDelay: `${i * 0.07}s`,
                }}
              />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "hsl(var(--muted-foreground))" }}>{b.m}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="cc-chip-card" style={{ position: "absolute", bottom: 20, left: 20, padding: "8px 12px", fontSize: 11 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="cc-live-dot" />
          <span style={{ fontWeight: 500 }}>Cost per booked job, tracked</span>
        </div>
      </div>
    </div>
  );
}

export const Mock = {
  LsaLead: MockLsaLead,
  Rank: MockRank,
  Gmb: MockGmb,
  Website: MockWebsite,
  Report: MockReport,
};
