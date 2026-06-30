import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { PageContainer } from "../components/layout";

const PolicyPage = styled(PageContainer)`
  line-height: 1.7;
`;

const Section = styled.section`
  margin-bottom: 28px;
`;

export default function Policy() {
  return (
    <PolicyPage>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <h1>Privacy Policy</h1>
      <p>
        <em>Last updated: June 2026</em>
      </p>

      <Section>
        <h2>1. Overview</h2>
        <p>
          This site is a personal resume and portfolio. Your privacy matters. This policy explains what information is
          collected when you log in and how it is used.
        </p>
      </Section>

      <Section>
        <h2>2. Information Collected</h2>
        <p>When you sign in via Google or Facebook, the following profile information is received:</p>
        <ul>
          <li>Display name</li>
          <li>Email address</li>
          <li>Profile picture URL</li>
          <li>Whether your email address has been verified by the provider</li>
        </ul>
        <p>No passwords are collected or stored. Authentication is handled entirely by the third-party provider.</p>
      </Section>

      <Section>
        <h2>3. How Your Information Is Used</h2>
        <p>
          Your information is used solely to identify your account on this site. It will not be sold, shared with third
          parties, or used for marketing purposes of any kind.
        </p>
      </Section>

      <Section>
        <h2>4. Cookies and Local Storage</h2>
        <p>This site stores information directly on your device to support its functionality:</p>
        <ul>
          <li>
            <strong>Authentication token</strong> — when you sign in, a JSON Web Token (JWT) is saved in your browser's
            local storage so you remain logged in across page loads. It is removed when you sign out.
          </li>
          <li>
            <strong>Firebase Authentication cookies</strong> — Firebase may set cookies or use IndexedDB/local storage
            on your device to manage your sign-in session. These are governed by{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google's Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Theme preference</strong> — your chosen display theme (light/dark) may be saved in local storage.
          </li>
        </ul>
        <p>No advertising cookies or third-party tracking cookies are placed by this site.</p>
      </Section>

      <Section>
        <h2>5. YouTube API Services</h2>
        <p>
          This site uses the{" "}
          <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer">
            YouTube Data API v3
          </a>{" "}
          to look up publicly available music video links for trivia content. No YouTube account data is collected,
          stored, or shared on your behalf.
        </p>
        <p>
          Google's privacy policy applies to data handled via YouTube API Services:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            https://policies.google.com/privacy
          </a>
          .
        </p>
      </Section>

      <Section>
        <h2>6. Third-Party Authentication</h2>

        <p>
          Sign-in is provided by Firebase Authentication (Google). By signing in you are also subject to the privacy
          policies of the provider you choose:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/policy.php" target="_blank" rel="noreferrer">
              Facebook Privacy Policy
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <h2>7. Data Retention</h2>
        <p>
          Your account data is retained for as long as you have an account on this site. You may request deletion of
          your data at any time by contacting me.
        </p>
      </Section>

      <Section>
        <h2>8. Contact</h2>
        <p>
          If you have any questions about this policy, please reach out via the <a href="/contact">contact page</a>.
        </p>
      </Section>
    </PolicyPage>
  );
}
