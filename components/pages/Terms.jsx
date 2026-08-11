"use client";
import { Layout, PageHero, CTABlock } from "@/components/shared";

// ⚠️ BEFORE LAUNCH — this is adapted boilerplate, not legal advice.
//   1. Replace every [YOUR CITY, STATE] / [YOUR STATE] placeholder.
//   2. Make sure the governing-law state matches where you actually operate.
//   3. Reconcile these Terms with the service agreement your clients sign —
//      especially the guarantees published on /guarantee.
//   4. Have a lawyer read it.
const TERMS_EFFECTIVE = "May 31, 2026";

const TERMS_TOC = [
  ["acceptance", "Agreement to these terms"],
  ["what-we-provide", "What we provide"],
  ["acceptable-use", "Acceptable use of the site"],
  ["intellectual-property", "Intellectual property"],
  ["third-party", "Third-party services & links"],
  ["disclaimers", "Disclaimers"],
  ["liability", "Limitation of liability"],
  ["indemnification", "Indemnification"],
  ["governing-law", "Governing law"],
  ["changes", "Changes to these terms"],
  ["contact", "Contact us"],
];

function TermsPage() {
  return (
    <Layout active={null}>
      <PageHero
        eyebrow="Legal"
        title={<>Terms &amp; Conditions</>}
        sub="The ground rules for using this website. In short: the site is ours, use it lawfully, and it's provided as-is. These terms are governed by [YOUR STATE] law."
      />

      <section className="cc-section cc-section--card">
        <div className="cc-container">
          <div className="cc-legal">
            <p className="cc-legal__meta">Effective date: {TERMS_EFFECTIVE} · Last updated: {TERMS_EFFECTIVE}</p>

            <nav className="cc-legal__toc" aria-label="On this page">
              <div className="cc-legal__toc-h">On this page</div>
              <ol>
                {TERMS_TOC.map(([id, label]) => (
                  <li key={id}><a href={`#${id}`}>{label}</a></li>
                ))}
              </ol>
            </nav>

            <p className="cc-legal__lead">
              These Terms &amp; Conditions ("Terms") govern your use of the BlackCat Marketing website at blackcatmarketing.com
              (the "Site"). BlackCat Marketing ("BlackCat Marketing," "we," "us," or "our") is a construction-focused marketing agency
              based in [YOUR CITY, STATE], serving customers across the United States. By using the Site, you agree to these Terms.
            </p>

            <section id="acceptance">
              <h2>Agreement to these terms</h2>
              <p>
                By visiting or using the Site, you agree to be bound by these Terms and by our <a href="/privacy">Privacy Policy</a>.
                If you don't agree with them, please don't use the Site. These Terms apply to the website only — any paid services
                we provide to a customer are covered by a separate written agreement between us and that customer.
              </p>
            </section>

            <section id="what-we-provide">
              <h2>What we provide</h2>
              <p>
                BlackCat Marketing provides <strong>marketing services</strong> (Local Services Ads management, website design and build, local SEO, and Google Business Profile management) to businesses across the United States.
                That includes designing, building, and hosting websites, and setting up lead-capture, follow-up, and review-automation
                systems. The Site itself is primarily informational — it tells you what we do and lets you book a call or request more
                information through our booking form. We may add, change, or remove parts of the Site at any time.
              </p>
            </section>

            <section id="acceptable-use">
              <h2>Acceptable use of the site</h2>
              <p>When you use the Site, you agree that you will not:</p>
              <ul>
                <li>Use it for any unlawful purpose or in violation of these Terms</li>
                <li>Submit false information, or impersonate someone else, through the booking form</li>
                <li>Attempt to gain unauthorized access to the Site, its servers, or any connected systems</li>
                <li>Interfere with or disrupt the Site, or introduce malware or harmful code</li>
                <li>Copy, scrape, or harvest content or data from the Site without our permission</li>
                <li>Use the Site in a way that could damage, disable, or overburden it</li>
              </ul>
            </section>

            <section id="intellectual-property">
              <h2>Intellectual property</h2>
              <p>
                The Site and everything on it — including the text, design, layout, graphics, logos, the BlackCat Marketing name and
                branding, and the code that runs it — is owned by BlackCat Marketing or its licensors and is protected by intellectual
                property laws. <strong>You may not copy, reproduce, republish, modify, or distribute any part of the Site</strong> without
                our prior written permission. You may view and use the Site for your own personal, non-commercial purpose of learning
                about and contacting us.
              </p>
            </section>

            <section id="third-party">
              <h2>Third-party services & links</h2>
              <p>
                Our booking form is provided by <strong>GoHighLevel</strong>, a third-party platform, and the Site may contain links to
                other third-party websites or tools. We don't control those third parties and aren't responsible for their content,
                products, or practices. Your use of a third-party service is governed by that party's own terms and privacy policy.
              </p>
            </section>

            <section id="disclaimers">
              <h2>Disclaimers</h2>
              <p>
                The Site and its content are provided <strong>"as is" and "as available," without warranties of any kind</strong>, whether
                express or implied. To the fullest extent permitted by law, we disclaim all warranties, including any implied warranties
                of merchantability, fitness for a particular purpose, and non-infringement. We don't warrant that the Site will be
                uninterrupted, error-free, secure, or free of viruses, and any information on the Site is for general purposes and is not
                a guarantee of any particular result.
              </p>
            </section>

            <section id="liability">
              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, BlackCat Marketing and its owners, employees, and contractors will not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising
                out of or related to your use of (or inability to use) the Site. Where liability cannot be excluded, our total liability to
                you for any claim relating to the Site is limited to one hundred U.S. dollars (USD $100). Some jurisdictions don't allow
                certain limitations, so some of these may not apply to you.
              </p>
            </section>

            <section id="indemnification">
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold BlackCat Marketing harmless from any claims, losses, or expenses (including reasonable legal
                fees) arising from your misuse of the Site or your breach of these Terms.
              </p>
            </section>

            <section id="governing-law">
              <h2>Governing law</h2>
              <p>
                These Terms are governed by the laws of the <strong>State of [YOUR STATE], USA</strong>, without regard to its conflict-of-laws
                rules. Any dispute relating to these Terms or the Site will be subject to the exclusive jurisdiction of the state and federal
                courts located in [YOUR STATE], and you consent to that jurisdiction.
              </p>
            </section>

            <section id="changes">
              <h2>Changes to these terms</h2>
              <p>
                We may update these Terms from time to time. When we do, we'll update the "Last updated" date at the top of this page. Your
                continued use of the Site after a change means you accept the updated Terms.
              </p>
            </section>

            <section id="contact">
              <h2>Contact us</h2>
              <p>
                Questions about these Terms? Email <a href="mailto:hello@blackcatmarketing.com">hello@blackcatmarketing.com</a>. BlackCat Marketing is
                based in [YOUR CITY, STATE], USA.
              </p>
            </section>
          </div>
        </div>
      </section>

      <CTABlock title="Ready to talk?" sub="Book a 20-minute call — no slideshow, no pressure." cta="Book a 20-min call" />
    </Layout>
  );
}

export default TermsPage;
