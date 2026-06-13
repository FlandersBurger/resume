import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const HomePage = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 16px;
`;

const HomeHero = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 36px;
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HomeAvatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  flex-shrink: 0;
`;

const HomeHeroText = styled.div`
  h1 {
    margin: 0 0 4px;
    font-size: 2.4em;
  }
  h2 {
    margin: 0 0 8px;
    font-size: 1.3em;
    font-weight: 400;
    opacity: 0.75;
  }
`;

const HomeTagline = styled.p`
  margin: 0;
  font-size: 0.9em;
  opacity: 0.6;
`;

const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
`;

const HomeInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 16px;
  border-radius: 8px;
  background: rgba(128, 128, 128, 0.08);
  .fa,
  .fab {
    font-size: 1.1em;
    width: 20px;
    text-align: center;
    opacity: 0.7;
  }
`;

const HomeNav = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const HomeNavBtn = styled(Link)`
  flex: 1 1 0;
  text-align: center;
`;

export default function Home() {
  return (
    <HomePage>
      <Helmet>
        <title>Laurent Debacker — Full Stack Developer</title>
        <meta
          name="description"
          content="Personal resume of Laurent Debacker, a Full Stack Developer based in Duncan, BC, Canada. Belgian-born, Canadian since 2015, fluent in 5 languages."
        />
        <meta property="og:title" content="Laurent Debacker — Full Stack Developer" />
        <meta
          property="og:description"
          content="Personal resume of Laurent Debacker, a Full Stack Developer based in Duncan, BC, Canada."
        />
        <meta property="og:url" content="https://belgocanadian.com/home" />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href="https://belgocanadian.com/home" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Laurent Debacker",
            "jobTitle": "Full Stack Developer",
            "url": "https://belgocanadian.com/home",
            "image": "https://belgocanadian.com/profile.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Duncan",
              "addressRegion": "BC",
              "addressCountry": "CA"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "Bachelor of Computer Science"
            },
            "knowsLanguage": ["French", "English", "Dutch", "German", "West Flemish"],
            "sameAs": [
              "https://www.linkedin.com/in/laurent-debacker-1633a916",
              "https://github.com/FlandersBurger",
              "https://www.instagram.com/flandersburger/"
            ]
          }
        `}</script>
      </Helmet>
      <HomeHero>
        <HomeAvatar src="/profile.jpg" alt="Laurent Debacker" />
        <HomeHeroText>
          <h1>Laurent Debacker</h1>
          <h2>Full Stack Developer</h2>
          <HomeTagline>
            Born and raised in Belgium &middot; In Canada since 2006 &middot; Canadian since 2015
          </HomeTagline>
        </HomeHeroText>
      </HomeHero>

      <HomeInfo>
        <HomeInfoItem>
          <i className="fa fa-certificate" />
          <span>Bachelor of Computer Science</span>
        </HomeInfoItem>
        <HomeInfoItem>
          <i className="fa fa-map-marker" />
          <span>Duncan, BC</span>
        </HomeInfoItem>
        <HomeInfoItem>
          <i className="fa fa-language" />
          <span>
            Français &middot; English &middot; Nederlands &middot; Deutsch &middot;{" "}
            <a href="https://en.wikipedia.org/wiki/West_Flemish" target="_blank" rel="noreferrer">
              West-Vlams
            </a>
          </span>
        </HomeInfoItem>
        <HomeInfoItem>
          <i className="fa fa-hashtag" />
          <span>
            <a href="https://www.linkedin.com/in/laurent-debacker-1633a916" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-lg" style={{ marginRight: 10 }} />
            </a>
            <a href="https://github.com/FlandersBurger" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-lg" style={{ marginRight: 10 }} />
            </a>
            <a href="https://www.instagram.com/flandersburger/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-lg" />
            </a>
          </span>
        </HomeInfoItem>
      </HomeInfo>

      <HomeNav>
        <HomeNavBtn to="/experience" className="btn btn-default">
          Experience
        </HomeNavBtn>
        <HomeNavBtn to="/skills" className="btn btn-default">
          Skills
        </HomeNavBtn>
        <HomeNavBtn to="/doodles" className="btn btn-default">
          Doodles
        </HomeNavBtn>
        <HomeNavBtn to="/contact" className="btn btn-default">
          Contact
        </HomeNavBtn>
      </HomeNav>
    </HomePage>
  );
}
