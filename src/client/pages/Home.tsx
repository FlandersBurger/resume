import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="home-page">
      <div className="home-hero">
        <img src="/profile.jpg" alt="Laurent Debacker" className="home-avatar" />
        <div className="home-hero-text">
          <h1>Laurent Debacker</h1>
          <h2>Full Stack Developer</h2>
          <p className="home-tagline">Born and raised in Belgium &middot; In Canada since 2006 &middot; Canadian since 2015</p>
        </div>
      </div>

      <div className="home-info">
        <div className="home-info-item">
          <i className="fa fa-certificate" />
          <span>Bachelor of Computer Science</span>
        </div>
        <div className="home-info-item">
          <i className="fa fa-map-marker" />
          <span>Duncan, BC</span>
        </div>
        <div className="home-info-item">
          <i className="fa fa-language" />
          <span>Français &middot; English &middot; Nederlands &middot; Deutsch &middot; <a href="https://en.wikipedia.org/wiki/West_Flemish" target="_blank" rel="noreferrer">West-Vlams</a></span>
        </div>
        <div className="home-info-item">
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
        </div>
      </div>

      <div className="home-nav">
        <Link to="/experience" className="btn btn-default home-nav-btn">
          <i className="fa fa-briefcase" /> Experience
        </Link>
        <Link to="/skills" className="btn btn-default home-nav-btn">
          <i className="fa fa-code" /> Skills
        </Link>
        <Link to="/hobbies" className="btn btn-default home-nav-btn">
          <i className="fa fa-heart" /> Hobbies
        </Link>
        <Link to="/contact" className="btn btn-default home-nav-btn">
          <i className="fa fa-envelope" /> Contact
        </Link>
      </div>
    </div>
  );
}

