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
        <em>Last updated: October 2026</em>
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
        <p>
          You can sign in with Google, Telegram, or an email address and password. Depending on the method, the
          following information is received:
        </p>
        <ul>
          <li>
            <strong>Google</strong> — display name, email address, profile picture URL, and whether your email address
            has been verified
          </li>
          <li>
            <strong>Telegram</strong> — your Telegram user ID, first and last name, username, and profile picture URL.
            Your phone number is not shared with this site.
          </li>
          <li>
            <strong>Email and password</strong> — the display name and email address you enter
          </li>
        </ul>
        <p>
          Passwords for email sign-in are handled by Firebase Authentication and never reach this site's servers. If you
          set a separate site password on your profile page, only a salted hash of it is stored, never the password
          itself.
        </p>
        <p>
          You can also choose to add a birth date and countries to your profile. These are optional and can be removed
          at any time.
        </p>
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
          Google and email sign-in are provided by Firebase Authentication (Google). Telegram sign-in uses the Telegram
          Login Widget. By signing in you are also subject to the privacy policies of the provider you choose:
        </p>
        <ul>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://telegram.org/privacy" target="_blank" rel="noreferrer">
              Telegram Privacy Policy
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
