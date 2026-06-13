import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet-async";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const DoodlesPage = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 0 16px 40px;
`;

const SectionLabel = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72em;
  color: #aaa;
  margin: 28px 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

const DoodleCard = styled(Link)<{ $index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 22px 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  color: #333;
  text-decoration: none;
  opacity: 0;
  animation: ${fadeInUp} 0.3s ease forwards;
  animation-delay: ${({ $index }) => $index * 45}ms;
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;

  &:hover {
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    text-decoration: none;
    color: #222;
  }
`;

const CardIcon = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
  color: #666;
`;

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 0.92em;
`;

const CardDesc = styled.div`
  font-size: 0.75em;
  color: #aaa;
  margin-top: 3px;
  line-height: 1.3;
`;

const games = [
  { to: "/asteroids", icon: "fa fa-rocket", label: "Asteroids", desc: "Shoot rocks in space" },
  { to: "/bubbles", icon: "far fa-circle", label: "Bubbles", desc: "Watch 'em drift" },
  { to: "/charades", icon: "fa fa-comments", label: "Charades", desc: "Act it out" },
  { to: "/lemmings", icon: "fa fa-users", label: "Lemmings", desc: "Or something like it" },
  { to: "/minesweeper", icon: "fa fa-bomb", label: "Minesweeper", desc: "Don't hit the mines" },
  { to: "/workout", icon: "fa fa-heartbeat", label: "Workout", desc: "Get ripped" },
  { to: "/yahtzee", icon: "fa fa-dice", label: "Yahtzee", desc: "Roll for glory" },
  { to: "/stew", icon: "fa fa-fire", label: "Beef Stew", desc: "Carbonnade Flamande" },
];

const quizzes = [
  { to: "/google", icon: "fab fa-google", label: "Google", desc: "Name the place" },
  { to: "/logos", icon: "fa fa-tag", label: "Logos", desc: "Identify the brands" },
  { to: "/animals", icon: "fa fa-paw", label: "Animals", desc: "Heed the call" },
  { to: "/flags", icon: "fa fa-flag", label: "Flags", desc: "Match the country" },
  { to: "/movies", icon: "fa fa-film", label: "Movies", desc: "Name that film" },
  { to: "/skeletons", icon: "fa fa-male", label: "Skeletons", desc: "Bone up on anatomy" },
];

export default function Doodles() {
  return (
    <DoodlesPage>
      <Helmet>
        <title>Doodles — Laurent Debacker</title>
        <meta name="description" content="Games, quizzes, and hobby galleries." />
        <meta property="og:title" content="Doodles — Laurent Debacker" />
        <meta property="og:url" content="https://belgocanadian.com/doodles" />
        <link rel="canonical" href="https://belgocanadian.com/doodles" />
      </Helmet>

      <SectionLabel>Playground</SectionLabel>
      <CardGrid>
        <DoodleCard to="/hobbies" $index={0}>
          <CardIcon>
            <i className="fa fa-heart" />
          </CardIcon>
          <CardTitle>Hobbies</CardTitle>
          <CardDesc>Photos & interests</CardDesc>
        </DoodleCard>
        {games.map((item, i) => (
          <DoodleCard key={item.to} to={item.to} $index={i + 1}>
            <CardIcon>
              <i className={item.icon} />
            </CardIcon>
            <CardTitle>{item.label}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
          </DoodleCard>
        ))}
      </CardGrid>

      <SectionLabel>Quizzes</SectionLabel>
      <CardGrid>
        {quizzes.map((item, i) => (
          <DoodleCard key={item.to} to={item.to} $index={i + games.length + 1}>
            <CardIcon>
              <i className={item.icon} />
            </CardIcon>
            <CardTitle>{item.label}</CardTitle>
            <CardDesc>{item.desc}</CardDesc>
          </DoodleCard>
        ))}
      </CardGrid>
    </DoodlesPage>
  );
}
