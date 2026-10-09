import { useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import {
  getLists,
  getListTotal,
  getLanguages,
  getCategories,
  CategoryOption,
  Language,
  TenThingsList,
} from "../../services/tenthings";
import { useApp } from "../../context/AppContext";

const TELEGRAM_URL = "https://t.me/joinchat/I1Di-1MXGXkjhgNPXi6Vfg";
const DISCORD_URL =
  "https://discord.com/oauth2/authorize?client_id=1508334882198392832&permissions=274877975552&integration_type=0&scope=bot+applications.commands";

// Query params the lists page used to own when it lived at /tenthings; old bot links still carry them.
const LIST_PARAMS = ["list", "search", "field", "lang", "cat", "quality"];

// A sample round for the hero illustration: some answers guessed, the rest still hidden.
const SAMPLE_LIST = "Largest countries by area";
const SAMPLE_ANSWERS: { value: string; guesser?: string }[] = [
  { value: "Russia", guesser: "Anna" },
  { value: "Canada", guesser: "Tom" },
  { value: "China" },
  { value: "United States", guesser: "Anna" },
  { value: "Brazil", guesser: "Sven" },
  { value: "Australia", guesser: "Tom" },
  { value: "India" },
  { value: "Argentina", guesser: "Sven" },
  { value: "Kazakhstan" },
  { value: "Algeria" },
];

const STEPS = [
  {
    icon: "fa-list-ol",
    title: "A list drops",
    text: "The bot posts a topic with ten hidden answers — capitals, albums, chemical elements, anything.",
  },
  {
    icon: "fa-bolt",
    title: "Everyone races",
    text: "Type your guesses straight into the chat. First to name an answer gets the points, and close spellings count.",
  },
  {
    icon: "fa-trophy",
    title: "Climb the board",
    text: "Build streaks, ask for hints, vote to skip, and see who knows the most at the end of each round.",
  },
];

const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: center;
  padding: 16px 0 32px;

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  h1 {
    margin: 0 0 12px;
    font-size: 40px;
    font-weight: 700;
  }

  .lead {
    color: var(--text-secondary);
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .btn i {
    margin-right: 6px;
  }
`;

const RoundCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;

  header {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    gap: 8px;

    small {
      color: var(--text-muted);
      font-weight: 400;
    }
  }

  ol {
    margin: 0;
    padding: 6px 0;
    list-style: none;
    counter-reset: answer;
  }

  li {
    counter-increment: answer;
    display: flex;
    gap: 10px;
    padding: 3px 14px;
    font-size: 14px;

    &::before {
      content: counter(answer) ".";
      width: 22px;
      color: var(--text-muted);
      text-align: right;
    }
  }

  .hidden-answer {
    color: var(--text-muted);
    letter-spacing: 2px;
  }

  .guesser {
    margin-left: auto;
    color: var(--text-muted);
    font-size: 12px;
  }
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface);
  margin-bottom: 32px;

  > div {
    padding: 14px 16px;
    text-align: center;
  }

  > div + div {
    border-left: 1px solid var(--border);
  }

  strong {
    display: block;
    font-size: 26px;
    font-variant-numeric: tabular-nums;
  }

  span {
    color: var(--text-muted);
    font-size: 13px;
  }
`;

const Section = styled.section`
  margin-bottom: 32px;

  h2 {
    font-size: 22px;
    margin: 0 0 14px;
  }
`;

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
  }

  > div {
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--surface);
    padding: 16px;
  }

  i {
    color: var(--accent);
    font-size: 20px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 6px;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 14px;
  }
`;

const SampleLists = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface);

  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
  }

  li {
    border-bottom: 1px solid var(--border-soft);
  }

  a {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 14px;
    color: var(--text);
    text-decoration: none;
  }

  a:hover {
    background: var(--surface-alt);
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Contribute = styled.section`
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface-alt);
  padding: 20px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  h2 {
    font-size: 20px;
    margin: 0 0 4px;
  }

  p {
    margin: 0;
    color: var(--text-secondary);
  }
`;

const countLeaves = (options: CategoryOption[]): number =>
  options.reduce((n, o) => n + (o.subcategories?.length ? countLeaves(o.subcategories) : 1), 0);

const formatCount = (n: number | null) => (n === null ? "—" : n.toLocaleString());

const FALLBACK_LANGUAGE = "EN";

// List languages are upper-case ISO 639-1 codes, so "nl-BE" in the browser maps to "NL".
const browserLanguage = () => (navigator.language || FALLBACK_LANGUAGE).split("-")[0].toUpperCase();

// A random handful of high-quality lists in the visitor's language, falling back to English when there are none.
async function getSampleLists(): Promise<{ language: string; lists: TenThingsList[] }> {
  const options = { limit: 10, sortBy: "random", quality: ["high"], categoriesNot: ["culture.adult"] };
  for (const language of [...new Set([browserLanguage(), FALLBACK_LANGUAGE])]) {
    const { lists } = await getLists({ ...options, language: [language] });
    if (lists.length) return { language, lists };
  }
  return { language: FALLBACK_LANGUAGE, lists: [] };
}

export default function TenThingsHome() {
  const { currentUser, openLogin } = useApp();
  const [searchParams] = useSearchParams();
  const [total, setTotal] = useState<number | null>(null);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [categoryCount, setCategoryCount] = useState<number | null>(null);
  const [sample, setSample] = useState<{ language: string; lists: TenThingsList[] } | null>(null);

  const legacyListLink = LIST_PARAMS.some((p) => searchParams.has(p));

  useEffect(() => {
    if (legacyListLink) return;
    getListTotal()
      .then(setTotal)
      .catch(() => setTotal(null));
    getLanguages()
      .then(setLanguages)
      .catch(() => setLanguages([]));
    getCategories()
      .then((c) => setCategoryCount(countLeaves(c)))
      .catch(() => setCategoryCount(null));
    getSampleLists()
      .then(setSample)
      .catch(() => setSample(null));
  }, [legacyListLink]);

  if (legacyListLink) return <Navigate to={`/tenthings-lists?${searchParams}`} replace />;

  const guessed = SAMPLE_ANSWERS.filter((a) => a.guesser).length;

  return (
    <div id="tenthings-home">
      <Helmet>
        <title>Ten Things — Daily Trivia for Telegram &amp; Discord</title>
        <meta
          name="description"
          content="Ten Things is a multiplayer trivia game for Telegram and Discord: race your friends to name all ten answers on a list, from a library of community-made lists."
        />
        <meta property="og:title" content="Ten Things — Daily Trivia for Telegram &amp; Discord" />
        <meta
          property="og:description"
          content="Race your friends to name all ten answers on a list, from a library of community-made lists."
        />
        <meta property="og:url" content="https://belgocanadian.com/tenthings" />
        <link rel="canonical" href="https://belgocanadian.com/tenthings" />
      </Helmet>

      <Hero>
        <div>
          <h1>Ten Things</h1>
          <p className="lead">
            A trivia game for group chats. The bot posts a list, everyone races to name all ten answers, and the
            quickest mind takes the points.
          </p>
          <Actions>
            <a className="btn btn-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              <i className="fab fa-telegram-plane" />
              Play on Telegram
            </a>
            <a className="btn btn-default" href={DISCORD_URL} target="_blank" rel="noreferrer">
              <i className="fab fa-discord" />
              Add to Discord
            </a>
            <Link className="btn btn-link" to="/tenthings-lists">
              Browse the lists
            </Link>
          </Actions>
        </div>

        <RoundCard aria-label="Example round">
          <header>
            {SAMPLE_LIST}
            <small>
              {guessed} / {SAMPLE_ANSWERS.length}
            </small>
          </header>
          <ol>
            {SAMPLE_ANSWERS.map((a) => (
              <li key={a.value}>
                {a.guesser ? (
                  <>
                    <span>{a.value}</span>
                    <span className="guesser">{a.guesser}</span>
                  </>
                ) : (
                  <span className="hidden-answer" aria-label="Not yet guessed">
                    {a.value.replace(/\S/g, "•")}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RoundCard>
      </Hero>

      <StatRow>
        <div>
          <strong>{formatCount(total)}</strong>
          <span>lists</span>
        </div>
        <div>
          <strong>{formatCount(languages.length || null)}</strong>
          <span>languages</span>
        </div>
        <div>
          <strong>{formatCount(categoryCount)}</strong>
          <span>categories</span>
        </div>
      </StatRow>

      <Section>
        <h2>How it works</h2>
        <Steps>
          {STEPS.map((s) => (
            <div key={s.title}>
              <i className={`fas ${s.icon}`} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </Steps>
      </Section>

      {sample && sample.lists.length > 0 && (
        <Section>
          <h2>Fresh lists</h2>
          <SampleLists>
            {sample.lists.map((l) => (
              <li key={l._id}>
                <Link to={`/tenthings-lists?list=${l._id}`}>
                  <span className="name">{l.name}</span>
                </Link>
              </li>
            ))}
          </SampleLists>
          <Link to={`/tenthings-lists?lang=${sample.language}&quality=high`}>See all lists like these →</Link>
        </Section>
      )}

      <Contribute>
        <div>
          <h2>Write your own lists</h2>
          <p>The lists are written by the players. Add yours and it joins the rotation.</p>
        </div>
        {currentUser ? (
          <Link className="btn btn-primary" to="/tenthings-lists">
            Create a list
          </Link>
        ) : (
          <button className="btn btn-primary" onClick={openLogin}>
            Log in to contribute
          </button>
        )}
      </Contribute>
    </div>
  );
}
