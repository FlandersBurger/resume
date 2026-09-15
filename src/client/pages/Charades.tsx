import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Helmet } from "react-helmet-async";

interface CharadesData {
  [category: string]: string[];
}

const popIn = keyframes`
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
`;

const Page = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 20px 16px 40px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 0.9em;
  margin-bottom: 32px;
`;

const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 36px;
`;

const CategoryBtn = styled.button<{ $active: boolean }>`
  padding: 9px 20px;
  border: 1px solid ${(p) => (p.$active ? "var(--accent)" : "var(--border)")};
  border-radius: 6px;
  background: ${(p) => (p.$active ? "var(--accent)" : "var(--surface)")};
  color: ${(p) => (p.$active ? "#fff" : "var(--text-secondary)")};
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background: ${(p) => (p.$active ? "var(--accent-hover)" : "var(--surface-alt)")};
    border-color: ${(p) => (p.$active ? "var(--accent-hover)" : "var(--border)")};
    color: ${(p) => (p.$active ? "#fff" : "var(--text)")};
  }
`;

const WordCard = styled.div`
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 52px 32px;
  background: var(--surface);
  margin-bottom: 16px;
`;

const WordDisplay = styled.div`
  font-size: 3em;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  word-break: break-word;
  animation: ${popIn} 0.2s ease;
`;

const NextBtn = styled.button`
  padding: 9px 28px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 0.9em;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    background: var(--surface-alt);
    border-color: var(--border);
    color: var(--text);
  }
`;

export default function Charades() {
  const [charades, setCharades] = useState<CharadesData>({});
  const [word, setWord] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    fetch("/charades.json")
      .then((r) => r.json())
      .then(setCharades);
  }, []);

  const selectWord = (category: string) => {
    const words = charades[category];
    setActiveCategory(category);
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  return (
    <Page>
      <Helmet>
        <title>Charades — Laurent Debacker</title>
        <meta name="description" content="Pick a category and act out the word." />
      </Helmet>
      <h2>Charades</h2>
      <Subtitle>Pick a category to get a word to act out</Subtitle>
      <CategoryGrid>
        {Object.keys(charades).map((key) => (
          <CategoryBtn key={key} type="button" $active={activeCategory === key} onClick={() => selectWord(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </CategoryBtn>
        ))}
      </CategoryGrid>
      {word && (
        <>
          <WordCard>
            <WordDisplay key={word}>{word}</WordDisplay>
          </WordCard>
          <NextBtn onClick={() => selectWord(activeCategory)}>Next word</NextBtn>
        </>
      )}
    </Page>
  );
}
