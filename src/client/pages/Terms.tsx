import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const TermsPage = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  line-height: 1.7;
`;

const Section = styled.section`
  margin-bottom: 28px;
`;

export default function Terms() {
  return (
    <TermsPage>
      <Helmet>
        <title>Terms of Service</title>
      </Helmet>
      <h1>Terms of Service</h1>
      <p>
        <em>Last updated: June 2026</em>
      </p>

      <Section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this site you agree to be bound by these Terms of Service. If you do not agree, please
          do not use the site.
        </p>
      </Section>

      <Section>
        <h2>2. Description of Service</h2>
        <p>
          This site is a personal resume and portfolio. It includes interactive features such as a trivia game (Ten
          Things), mini-games, quizzes, and a blog. Some features require you to log in via Google or Facebook.
        </p>
      </Section>

      <Section>
        <h2>3. YouTube API Services</h2>
        <p>
          This site uses the{" "}
          <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer">
            YouTube Data API v3
          </a>{" "}
          to look up music videos associated with trivia list items. By using features that involve YouTube content, you
          also agree to the{" "}
          <a href="https://www.youtube.com/t/terms" target="_blank" rel="noreferrer">
            YouTube Terms of Service
          </a>
          .
        </p>
        <p>
          YouTube API data is used solely to retrieve publicly available video links. No YouTube account data is
          accessed or stored on your behalf.
        </p>
      </Section>

      <Section>
        <h2>4. User Conduct</h2>
        <p>You agree not to misuse the site, attempt to disrupt its operation, or use it for any unlawful purpose.</p>
      </Section>

      <Section>
        <h2>5. Intellectual Property</h2>
        <p>
          All content on this site (text, code, graphics) is the property of the site owner unless otherwise stated.
          YouTube video content remains the property of the respective rights holders and is governed by YouTube's
          terms.
        </p>
      </Section>

      <Section>
        <h2>6. Disclaimer</h2>
        <p>
          This site is provided "as is" without warranties of any kind. The owner is not liable for any damages arising
          from use of the site.
        </p>
      </Section>

      <Section>
        <h2>7. Changes to Terms</h2>
        <p>
          These terms may be updated from time to time. Continued use of the site after changes constitutes acceptance
          of the new terms.
        </p>
      </Section>

      <Section>
        <h2>8. Contact</h2>
        <p>
          For questions about these terms, please reach out via the <a href="/contact">contact page</a>.
        </p>
      </Section>
    </TermsPage>
  );
}
